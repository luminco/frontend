import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { courses as allCourseData } from "../data";
import coursePlaceholder from "../Assets/Images/course-card-bg.png";
import qrCode from "../Assets/Images/qrcode.png";
import "../index.css";

const formatPrice = (p) => {
  const n = parseFloat(p);
  return isNaN(n) ? "299" : Math.round(n).toString();
};

/* ─── Payment Modal ──────────────────────────────────── */
const PaymentModal = ({ course, onClose }) => {
  const [form, setForm]       = useState({ email: "", mobile: "", txnId: "" });
  const [submitted, setSubmitted] = useState(false);
  const price      = formatPrice(course.price);
  const courseIdUp = course.id.toUpperCase();

  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>

        {submitted ? (
          <div className="modal-success">
            <h3>Payment Submitted!</h3>
            <p>We will verify and grant access within 2 hours via <strong>{form.email}</strong>.</p>
          </div>
        ) : (
          <div className="modal-inner">
            <div className="modal-left">
              <img src={qrCode} alt="Payment QR" className="modal-qr" />
              <p className="modal-or">OR</p>
              <p className="modal-upi-label">UPI ID:</p>
              <p className="modal-upi-id">lumin.education@axl</p>
              <div className="modal-instructions">
                <p>Scan the QR code or pay the required amount on the given UPI ID.</p>
                <p>After paying, fill out the details in the form provided.</p>
                <p>You will be given access to course material through your email ID that you have filled in the form.</p>
                <p>The confirmation will be done within 2 hours.</p>
                <p>Contact this no. further assistance- 8851122495</p>
              </div>
            </div>
            <div className="modal-right">
              <div className="modal-course-header">
                <span>Course Details</span><span>Price</span>
              </div>
              <div className="modal-course-row">
                <span>{course.courseName}</span>
                <span className="modal-price">₹{price}</span>
              </div>
              <div className="modal-divider" />
              <form onSubmit={handleSubmit} className="modal-form">
                <input type="email"  required placeholder="Email Address"
                  value={form.email}   onChange={(e) => setForm({ ...form, email:  e.target.value })} className="modal-input" />
                <input type="tel"    required placeholder="Mobile No."
                  value={form.mobile}  onChange={(e) => setForm({ ...form, mobile: e.target.value })} className="modal-input" />
                <input type="text"   required placeholder="Last 5 digits of Transaction ID"
                  maxLength={5} value={form.txnId} onChange={(e) => setForm({ ...form, txnId: e.target.value })} className="modal-input" />
                <input type="text" readOnly value={courseIdUp}        className="modal-input modal-input-readonly" />
                <input type="text" readOnly value={course.courseName} className="modal-input modal-input-readonly" />
                <button type="submit" className="modal-submit-btn">Submit</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

/* ─── Accordion Row ──────────────────────────────────── */
const AccordionRow = ({ topic, isOpen, onToggle }) => {
  const isFree      = topic.topicName.includes("[Free Preview]");
  const displayName = topic.topicName.replace(" [Free Preview]", "");

  return (
    <div className="acc-row">
      <button className="acc-row-header" onClick={onToggle}>
        <span className={`acc-tri ${isOpen ? "acc-tri--open" : ""}`}>▶</span>
        <span className="acc-row-title">
          {displayName}
          {isFree && <span className="acc-free-tag"> [Free Preview]</span>}
        </span>
      </button>

      {isOpen && (
        <div className="acc-row-body">
          {(topic.subTopics || []).map((sub, j) => (
            <div key={j} className="acc-sub-item">
              <p className="acc-sub-title">
                <span className="acc-dot">•</span>&nbsp;
                {sub.name}
                {sub.isFree
                  ? <em className="acc-badge acc-badge--free"> (Free)</em>
                  : <em className="acc-badge acc-badge--paid"> (Paid)</em>}
              </p>
              <div className="acc-sub-links">
                <a href={sub.videoLink || "#"} className="acc-sub-link">🎬 Video Lecture</a>
                <a href={sub.textLink  || "#"} className="acc-sub-link">📄 Lecture Notes</a>
              </div>
              <p className="acc-sub-date">Last Updated: {sub.lastUpdated}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

/* ─── CoursePage ─────────────────────────────────────── */
const CoursePage = () => {
  const { term, courseId } = useParams();
  const [course,    setCourse]    = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [openSet,   setOpenSet]   = useState(new Set([0]));

  useEffect(() => {
    const grp   = allCourseData.find((g) => g.id === term);
    const local = grp?.courses.find((c) => c.id === courseId);
    if (local) setCourse(local);

    fetch("https://lumin-backend-v1.onrender.com/api/user/courses/all")
      .then((r) => r.json())
      .then((data) => {
        const live = data.find(
          (c) => (c.courseId === courseId || c.id === courseId) && c.term === term
        );
        if (live) setCourse((p) => ({ ...p, ...live, contents: p?.contents || live.contents }));
      })
      .catch(() => {});
  }, [term, courseId]);

  const toggle = (i) =>
    setOpenSet((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });

  if (!course) {
    return <div className="cp-loading"><p>Loading course…</p></div>;
  }

  const instructor = typeof course.instructor === "string"
    ? course.instructor : course.instructor?.name || "";
  const price       = formatPrice(course.price);
  const origPrice   = Math.round(parseFloat(course.price || 299) / 0.6);
  const lastUpdated = course.lastUpdated    || "14th May, 2026";
  const language    = course.language       || "English with conversational Hindi";
  const accessible  = course.accessibleTill || "30th September 2026";
  const authorBio   = course.authorBio
    || "We provide top quality semester preparation content specially designed for law students. This course contains concise notes, case summaries, video lectures, and solved PYQs.";

  const PurchaseCard = () => (
    <div className="cp-card">
      <img
        src={course.img || coursePlaceholder}
        alt={course.courseName}
        className="cp-card-img"
        onError={(e) => { e.target.src = coursePlaceholder; }}
      />
      <div className="cp-card-body">
        <div className="cp-price-row">
          <span className="cp-price">₹{price}</span>
          <span className="cp-price-orig">₹{origPrice}</span>
          <span className="cp-price-off">40% off</span>
        </div>
        <p className="cp-exclusive">🔔 Exclusive for first 50 students!</p>
        <button className="cp-buy-btn" onClick={() => setShowModal(true)}>
          Buy Now
        </button>
        <p className="cp-access">Accessible till {accessible}</p>
      </div>
    </div>
  );

  return (
    <>
      <div className="cp-page">

        {/* Breadcrumb — full width */}
        <nav className="cp-breadcrumb">
          <Link to="/#courses" className="cp-bc-link">Courses</Link>
          <span className="cp-bc-sep"> &gt; </span>
          <Link to="/#courses" className="cp-bc-link">Term {term}</Link>
          <span className="cp-bc-sep"> &gt; </span>
          <span className="cp-bc-cur">{course.courseName}</span>
        </nav>

        {/*
          CSS Grid with named areas:
          Desktop:  [info    ] [card]
                    [contents] [card]
          Mobile:   [info]
                    [card]
                    [contents]
        */}
        <div className="cp-grid">

          {/* area: info — title, instructor, meta, about, feature cards */}
          <div className="cp-info">
            <h1 className="cp-title">{course.courseName}</h1>

            <p className="cp-by">
              Created By&nbsp;
              <span className="cp-instructor">{instructor}</span>
            </p>

            <p className="cp-meta">
              Last Updated {lastUpdated}&nbsp;&nbsp;&nbsp;{language}
            </p>

            <div>
              <h3 className="cp-about-label">About the author</h3>
              <p className="cp-about-text">{authorBio}</p>
            </div>

            <div className="cp-features">
              {[
                { title: "Video Lectures",  desc: "Easy to learn video lectures." },
                { title: "Lecture Notes",   desc: "Comprehensive notes for learning." },
                { title: "Case Summaries",  desc: "Concise summaries for exams." },
                { title: "Solved PYQs",     desc: "Previous year solved questions." },
              ].map((f) => (
                <div key={f.title} className="cp-feature-card">
                  <p className="cp-fc-title">{f.title}</p>
                  <p className="cp-fc-desc">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* area: card — purchase card (sticky on desktop, inline on mobile) */}
          <div className="cp-card-col">
            <PurchaseCard />
          </div>

          {/* area: contents — course contents accordion */}
          {course.contents && course.contents.length > 0 && (
            <div className="cp-contents">
              <h3 className="cp-contents-label">Course Contents</h3>
              <div className="cp-acc">
                {course.contents.map((topic, i) => (
                  <AccordionRow
                    key={i}
                    topic={topic}
                    isOpen={openSet.has(i)}
                    onToggle={() => toggle(i)}
                  />
                ))}
              </div>
            </div>
          )}

        </div>
      </div>

      {showModal && <PaymentModal course={course} onClose={() => setShowModal(false)} />}
    </>
  );
};

export default CoursePage;
