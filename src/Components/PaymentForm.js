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
//   console.log("Initial courseId:", paymentData.courseId); // Check initial courseId
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setpaymentData({ ...paymentData, [name]: value });
//   };


// const handleSubmit = async (e) => {
//   console.log("Submitting form with data:", paymentData);
//   e.preventDefault();

//   setLoading(true);
//   setError('');
//   setSuccess('');

//   try {
//     const formURL =
//       "https://docs.google.com/forms/d/1MZNEwmEGUAJdvWOiOubSi039tnpv7L3xSJkrQewCOI8/formResponse";

//     const formData = new FormData();

//     formData.append("entry.2045910219", paymentData.email);
//     formData.append("entry.1980892240", paymentData.courseId);
//     formData.append("entry.119183208", paymentData.mobile);
//     formData.append("entry.1020108503", paymentData.courseName);
//     formData.append("entry.1418791824", paymentData.transactionId);

//     // IMPORTANT EXTRA FIELDS
//     formData.append("fvv", "1");
//     formData.append("pageHistory", "0");
//     console.log("Submitting...");
// for (let pair of formData.entries()) {
//   console.log(pair[0], pair[1]);
// }

//      const result = await fetch(formURL, {
//       method: "POST",
//       mode: "no-cors",
//       body: formData,
//     });
//     console.log("Fetch result:", result);


//     setSuccess("Payment submitted successfully!");

//     alert("Payment submitted successfully!");

//     setpaymentData({
//       email: "",
//       mobile: "",
//       transactionId: "",
//       courseId: courseId,
//       courseName: title,
//     });

//   } catch (error) {
//     console.log(error);
//     setError("Submission failed");
//   } finally {
//     setLoading(false);
//   }
// };

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
//             type="text"
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
