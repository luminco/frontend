// import React, { useState } from 'react';
// import {  useLocation } from 'react-router-dom';
// import qrcode from "../Assets/Images/qrcode.png";

// const PaymentForm = () => {

//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const courseId = queryParams.get('courseId');
//   const title = queryParams.get('title');

//   const [paymentData, setpaymentData] = useState({
//     email: '',
//     mobile: '',
//     transactionId: '',
//     courseId: courseId,
//     courseName: title,
//   });
  
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setpaymentData({ ...paymentData, [name]: value });
//   };


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
//     setSuccess('');

//     try {
//       const formData = new FormData();
//       formData.append('entry.1598495340', paymentData.email);
//       formData.append('entry.16627134', paymentData.mobile);
//       formData.append('entry.686243578', paymentData.transactionId);
//       formData.append('entry.631697079', courseId);
//       formData.append('entry.706764247', title);


//       // Make POST request to Google Form endpoint
//       const response = await fetch('https://docs.google.com/forms/d/e/1FAIpQLSdGfT8h21o2PokT_r13cogz2O92HDS7quPlILR1qm9ySeQlaQ/formResponse', {
//         method: 'POST',
//         body: formData,
//         headers: {
//           'Accept': 'application/x-www-form-urlencoded;charset=UTF-8',
//         },
//       });
//       if (response.ok) {
//         setSuccess('Payment submitted successfully!');
//         setTimeout(() => {
//           alert('Payment submitted successfully!');
//         }, 2000);
//       } else {
//         setError('Error submitting payment');
//       }
//     } catch (error) {
//       setError(error.message || 'Error submitting payment');
//     } finally {
//       setLoading(false);
//     }
//   };

//   console.log("Course ID:", paymentData.courseId); // Check courseId in console
//   console.log("Title:", paymentData.courseName); 
//   return (
//     <div className="container">
//       {error && <div className="text-red-500 mb-4">{error}</div>}
//       {success && <div className="text-green-500 mb-4">{success}</div>}
//       <div className="payment-section">
//         <img src={qrcode} alt="QR Code" className="qr-code" />
//         <p>OR</p>
//         <p className="upi-id">UPI ID: lumin.education@axl</p>
//         <p className="instructions">
//           Scan the QR code or pay the required amount on the given UPI ID.
//           <br />
//           After paying, fill out the details in the form provided.
//           <br />
//           You will be given access to course material through your email ID that you have filled in the form.
//           <br />
//           The confirmation will be done within 2 hours.
//           <br />
//           Contact this no. further assistance- 8851122495
//         </p>
//       </div>
//       <div className="form-section">
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email Address"
//             onChange={handleChange}
//             value={paymentData.email}
//             required
//           />
//           <input
//             type="tel"
//             name="mobile"
//             placeholder="Mobile No."
//             onChange={handleChange}
//             value={paymentData.mobile}
//             required
//           />
//           <input
//             type="text"
//             name="transactionId"
//             placeholder="Last 5 digits of Transaction ID"
//             onChange={handleChange}
//             value={paymentData.transactionId}
//             required
//           />
//           <input
//             type="text"
//             name="courseId"
//             value={paymentData?.courseId}
//             onChange={handleChange}
//             disabled
//           />
//           <input
//             type="text"
//             name="courseName"
//             value={paymentData?.courseName}
//             onChange={handleChange}
//             disabled
//           />
//           <button
//             type="submit"
//             className="mt-4 w-30 bg-blue-500 text-white py-2 px-4 rounded-md cta-btn"
//             disabled={loading}
//           >
//             {loading ? 'Submitting...' : 'Submit'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default PaymentForm;
import React, { useState } from "react";
import qrcode from "../Assets/Images/qrcode.png";

const PaymentForm = ({ courseId, title, onClose }) => {
  const [paymentData, setPaymentData] = useState({
    email: "",
    mobile: "",
    transactionId: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setPaymentData({
      ...paymentData,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   setLoading(true);
  //   setError("");
  //   setSuccess("");

  //   try {
  //     const formData = new FormData();

  //     // GOOGLE FORM ENTRY IDS
  //     formData.append("entry.1598495340", paymentData.email);
  //     formData.append("entry.16627134", paymentData.mobile);
  //     formData.append("entry.686243578", paymentData.transactionId);
  //     formData.append("entry.631697079", courseId);
  //     formData.append("entry.706764247", title);

  //     await fetch(
  //       "https://docs.google.com/forms/d/e/1FAIpQLSdGfT8h21o2PokT_r13cogz2O92HDS7quPlILR1qm9ySeQlaQ/formResponse",
  //       {
  //         method: "POST",
  //         mode: "no-cors",
  //         body: formData,
  //       }
  //     );

  //     setSuccess(
  //       "Payment details submitted successfully! You will receive access within 2 hours."
  //     );

  //     setPaymentData({
  //       email: "",
  //       mobile: "",
  //       transactionId: "",
  //     });

  //     setTimeout(() => {
  //       onClose();
  //     }, 3000);
  //   } catch (err) {
  //     console.error(err);

  //     setError(
  //       "Something went wrong while submitting the form. Please try again."
  //     );
  //   } finally {
  //     setLoading(false);
  //   }
  // };
//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   setLoading(true);
//   setError("");
//   setSuccess("");

//   try {
//     const formData = new FormData();

//     // GOOGLE FORM ENTRY IDS
//     formData.append("entry.1598495340", paymentData.email);
//     formData.append("entry.16627134", paymentData.mobile);
//     formData.append("entry.686243578", paymentData.transactionId);
//     formData.append("entry.631697079", courseId);
//     formData.append("entry.706764247", title);

//     console.log("Submitting form...");

//     await fetch(
//       "https://docs.google.com/forms/d/e/1FAIpQLSdGfT8h21o2PokT_r13cogz2O92HDS7quPlILR1qm9ySeQlaQ/formResponse",
//       {
//         method: "POST",
//         mode: "no-cors",
//         body: formData,
//       }
//     );

//     console.log("Form submitted successfully");

//     setSuccess(
//       "Payment details submitted successfully! You will receive access within 2 hours."
//     );

//     setPaymentData({
//       email: "",
//       mobile: "",
//       transactionId: "",
//     });

//     setTimeout(() => {
//       onClose();
//     }, 3000);

//   } catch (err) {
//     console.error("Submission Error:", err);

//     setError(
//       "Something went wrong while submitting the form. Please try again."
//     );
//   } finally {
//     setLoading(false);
//   }
// };
const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);
  setError("");
  setSuccess("");

  try {
    const formURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSdGfT8h21o2PokT_r13cogz2O92HDS7quPlILR1qm9ySeQlaQ/formResponse";

    const formData = new FormData();

    // USE YOUR REAL ENTRY IDS HERE
    formData.append("entry.YOUR_EMAIL_ID", paymentData.email);
    formData.append("entry.YOUR_MOBILE_ID", paymentData.mobile);
    formData.append("entry.YOUR_TRANSACTION_ID", paymentData.transactionId);
    formData.append("entry.YOUR_COURSE_ID", courseId);
    formData.append("entry.YOUR_TITLE_ID", title);

    await fetch(formURL, {
      method: "POST",
      mode: "no-cors",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    setSuccess(
      "Payment details submitted successfully! You will receive access within 2 hours."
    );

    setPaymentData({
      email: "",
      mobile: "",
      transactionId: "",
    });

    setTimeout(() => {
      onClose();
    }, 3000);
  } catch (err) {
    console.error(err);

    setError("Submission failed.");
  } finally {
    setLoading(false);
  }
};

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.55)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 99999,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fff",
          borderRadius: "12px",
          padding: "2rem",
          display: "flex",
          gap: "2rem",
          maxWidth: "720px",
          width: "90%",
          position: "relative",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            background: "none",
            border: "none",
            fontSize: "1.4rem",
            cursor: "pointer",
            color: "#555",
          }}
        >
          ✕
        </button>

        {/* LEFT SIDE */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            paddingTop: "1rem",
          }}
        >
          <img
            src={qrcode}
            alt="QR Code"
            style={{
              width: "180px",
              height: "180px",
              objectFit: "contain",
            }}
          />

          <p style={{ fontWeight: "bold", margin: 0 }}>OR</p>

          <p
            style={{
              fontWeight: "600",
              fontSize: "0.95rem",
              margin: 0,
            }}
          >
            UPI ID: lumin.co.in@axl
          </p>

          <p
            style={{
              color: "red",
              fontSize: "0.78rem",
              textAlign: "center",
              lineHeight: "1.6",
              margin: 0,
            }}
          >
            Scan the QR code or pay the required amount on the given UPI ID.
            <br />
            After payment, fill the details in the form.
            <br />
            Course access will be sent to your email.
            <br />
            Confirmation will be done within 2 hours.
          </p>
        </div>

        {/* DIVIDER */}
        <div
          style={{
            width: "1px",
            background: "#ddd",
            alignSelf: "stretch",
          }}
        />

        {/* RIGHT SIDE */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          {/* HEADER */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontWeight: "bold",
              color: "#2d7a4f",
              borderBottom: "1px solid #eee",
              paddingBottom: "0.5rem",
            }}
          >
            <span>Course Details</span>
            <span>Price</span>
          </div>

          {/* COURSE */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "0.95rem",
            }}
          >
            <span>{title}</span>

            <span
              style={{
                fontWeight: "700",
                color: "#2d7a4f",
              }}
            >
              ₹299
            </span>
          </div>

          {/* ERROR */}
          {error && (
            <p
              style={{
                color: "red",
                fontSize: "0.85rem",
                margin: 0,
              }}
            >
              {error}
            </p>
          )}

          {/* SUCCESS */}
          {success && (
            <p
              style={{
                color: "green",
                fontSize: "0.85rem",
                margin: 0,
              }}
            >
              {success}
            </p>
          )}

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={paymentData.email}
              onChange={handleChange}
              required
              style={{
                border: "none",
                borderBottom: "1px solid #999",
                padding: "0.4rem 0",
                outline: "none",
                fontSize: "0.9rem",
                background: "transparent",
              }}
            />

            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={paymentData.mobile}
              onChange={handleChange}
              required
              style={{
                border: "none",
                borderBottom: "1px solid #999",
                padding: "0.4rem 0",
                outline: "none",
                fontSize: "0.9rem",
                background: "transparent",
              }}
            />

            <input
              type="text"
              name="transactionId"
              placeholder="Last 5 digits of Transaction ID"
              value={paymentData.transactionId}
              onChange={handleChange}
              required
              style={{
                border: "none",
                borderBottom: "1px solid #999",
                padding: "0.4rem 0",
                outline: "none",
                fontSize: "0.9rem",
                background: "transparent",
              }}
            />

            <input
              type="text"
              value={courseId}
              readOnly
              style={{
                border: "none",
                borderBottom: "1px solid #ddd",
                padding: "0.4rem 0",
                outline: "none",
                fontSize: "0.9rem",
                color: "#555",
                background: "transparent",
              }}
            />

            <input
              type="text"
              value={title}
              readOnly
              style={{
                border: "none",
                borderBottom: "1px solid #ddd",
                padding: "0.4rem 0",
                outline: "none",
                fontSize: "0.9rem",
                color: "#555",
                background: "transparent",
              }}
            />

            <button
              type="submit"
              disabled={loading}
              style={{
                padding: "0.75rem",
                borderRadius: "9999px",
                background: loading ? "#aaa" : "#2d7a4f",
                color: "#fff",
                border: "none",
                fontWeight: "600",
                fontSize: "1rem",
                cursor: loading ? "not-allowed" : "pointer",
                marginTop: "0.5rem",
              }}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;