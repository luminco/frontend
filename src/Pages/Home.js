import React, { useEffect, useState } from 'react';
import CourseCard from '../Components/CourseCard';
import coursePlaceholder from '../Assets/Images/course-card-bg.png';
import axios from '../axios';
import { courses as localCourseData } from '../data';

const TERM_ORDER = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

const ordinalLabel = (term) => {
  const map = {
    '1': '1st', '2': '2nd', '3': '3rd', '4': '4th',
    '5': '5th', '6': '6th', '7': '7th', '8': '8th',
    '9': '9th', '10': '10th',
  };
  return `${map[term] || term} Term`;
};

// Flatten local data.js courses into API-compatible flat array
const flattenLocalCourses = () => {
  const termNumMap = { '1st': '1', '2nd': '2', '3rd': '3', '4th': '4', '5th': '5', '6th': '6', '7th': '7', '8th': '8', '9th': '9', '10th': '10' };
  return localCourseData.flatMap((termGroup) => {
    const termNum = termNumMap[termGroup.term] || termGroup.term;
    return (termGroup.courses || []).map((c) => ({
      _id: c.id,
      courseId: c.id,
      title: c.courseName,
      courseName: c.courseName,
      instructor: c.instructor,
      img: c.img || coursePlaceholder,  // use actual image from data.js
      term: termNum,
    }));
  });
};

const Home = () => {
  const [courses, setCourses] = useState(flattenLocalCourses());
  const [loading, setLoading] = useState(false); // local data shown instantly, no loading spinner needed
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get('/user/courses/all');
        if (Array.isArray(res.data) && res.data.length > 0) {
          setCourses(res.data);
        }
      } catch (err) {
        console.error('Failed to fetch live courses:', err);
        // Don't show error — local data is already displayed
      }
    };
    getData();
  }, []);

  // Group by term
  const coursesByTerm = (courses || []).reduce((acc, course) => {
    const term = String(course.term || 'Other');
    if (!acc[term]) acc[term] = [];
    acc[term].push(course);
    return acc;
  }, {});

  const sortedTerms = Object.keys(coursesByTerm).sort(
    (a, b) =>
      (TERM_ORDER.indexOf(a) === -1 ? 99 : TERM_ORDER.indexOf(a)) -
      (TERM_ORDER.indexOf(b) === -1 ? 99 : TERM_ORDER.indexOf(b))
  );

  const getInstructor = (instructor) => {
    if (!instructor) return '';
    if (typeof instructor === 'string') return instructor;
    if (Array.isArray(instructor)) return instructor.map(i => i.name || i).join(' and ');
    return instructor.name || '';
  };

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="container">
        <div className="container-content">
          <div className="right-section">
            <h1 className="title">Welcome</h1>
            <p className="container-text">
              We offer semester exam preparation guides for LL.B. students Delhi
              University. We simplify the exam preparation journey by offering
              interactive video lectures which are specific to exams and previous
              year question papers, concise case summaries and lecture notes, and
              sample answers to previous year exam questions.
              <br /><br />
              We provide top-tier education in an accessible format, ensuring
              that learning is both enriching and enjoyable. Our dedicated
              instructors are deeply committed to empowering students to thrive
              academically.
            </p>
            <div className="c-button">
              <a href="#courses" className="cta-btn">Our Courses</a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRODUCT / FEATURES ─── */}
      <section className="course-desp-box" id="product">
        <h2 className="course-desp-title">In Our Courses, we will provide</h2>
        <p className="course-desp-text">
          We offer exam preparation guide for LLB students of Delhi University
        </p>
        <div className="slabs-container">
          <article className="row-slab" id="row-slab1">
            <h3 className="slab-title">Video Lectures</h3>
            <p className="slab-text">
              Easy to learn Video lectures which are designed specifically for
              LL.B. semester exams to help student excel academically.
            </p>
          </article>
          <article className="row-slab" id="row-slab2">
            <h3 className="slab-title">Topic Notes</h3>
            <p className="slab-text">
              Comprehensive and clear topic notes for effortless learning.
            </p>
          </article>
          <article className="row-slab" id="row-slab3">
            <h3 className="slab-title">Case Summaries</h3>
            <p className="slab-text">
              Concise summaries of cases essential for final exams.
            </p>
          </article>
          <article className="row-slab" id="row-slab4">
            <h3 className="slab-title">Sample Answers</h3>
            <p className="slab-text">
              Sample answers guide for the past five years of question papers.
            </p>
          </article>
        </div>
      </section>

      {/* ─── COURSES ─── */}
      <section className="center-section" id="courses">
        <h2 className="section-title">Our Courses</h2>

        {loading && (
          <p style={{ color: '#6b7280', padding: '3rem', fontSize: '1.1rem' }}>
            Loading courses…
          </p>
        )}

        {!loading && error && (
          <p style={{ color: '#dc2626', padding: '2rem' }}>
            Couldn't load courses. Please try again later.
          </p>
        )}

        {!loading && !error && sortedTerms.length === 0 && (
          <p style={{ color: '#6b7280', padding: '3rem' }}>
            No courses available at the moment.
          </p>
        )}

        {!loading && !error && sortedTerms.length > 0 && (
          <div className="course-container">
            {sortedTerms.map((term) => (
              <div key={term}>
                <h3 className="term-title">{ordinalLabel(term)}</h3>
                <div className="course-cards-container">
                  {coursesByTerm[term].map((course) => (
                    <CourseCard
                      key={course._id || course.courseId}
                      courseName={course.title || course.courseName}
                      courseImage={course.img || coursePlaceholder}
                      courseId={course.courseId || course.id}
                      instructorName={getInstructor(course.instructor)}
                      term={course.term}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default Home;
