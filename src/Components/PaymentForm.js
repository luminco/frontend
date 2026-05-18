// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import qrcode from "../Assets/Images/qrcode.png";

// const PaymentForm = () => {
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);

//   const courseId = queryParams.get("courseId");
//   const title = queryParams.get("title");

//   const [paymentData, setPaymentData] = useState({
//     email: "",
//     mobile: "",
//     transactionId: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setPaymentData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   setLoading(true);
//   //   setError("");
//   //   setSuccess("");

//   //   try {
//   //     const formData = new FormData();

//   //     // ✅ GOOGLE FORM ENTRY IDS (yours)
//   //     formData.append("entry.1598495340", paymentData.email);
//   //     formData.append("entry.16627134", paymentData.mobile);
//   //     formData.append("entry.686243578", paymentData.transactionId);
//   //     formData.append("entry.631697079", courseId || "");
//   //     formData.append("entry.706764247", title || "");

//   //     await fetch(
//   //       "https://docs.google.com/forms/d/e/1FAIpQLSdGfT8h21o2PokT_r13cogz2O92HDS7quPlILR1qm9ySeQlaQ/formResponse",
//   //       {
//   //         method: "POST",
//   //         mode: "no-cors",
//   //         body: formData,
//   //       }
//   //     );

//   //     setSuccess("Payment submitted successfully!");

//   //     setPaymentData({
//   //       email: "",
//   //       mobile: "",
//   //       transactionId: "",
//   //     });
//   //   } catch (err) {
//   //     setError("Submission failed. Please try again.");
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };
//   const handleSubmit = async (e) => {
//   e.preventDefault();
//   setLoading(true);
//   setError("");
//   setSuccess("");

//   try {
//     const formBody = new URLSearchParams();

//     formBody.append("entry.1598495340", paymentData.email);
//     formBody.append("entry.16627134", paymentData.mobile);
//     formBody.append("entry.686243578", paymentData.transactionId);
//     formBody.append("entry.631697079", courseId || "");
//     formBody.append("entry.706764247", title || "");

//     await fetch(
//       "https://docs.google.com/forms/d/e/1FAIpQLSdGfT8h21o2PokT_r13cogz2O92HDS7quPlILR1qm9ySeQlaQ/formResponse",
//       {
//         method: "POST",
//         mode: "no-cors",
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//         },
//         body: formBody.toString(),
//       }
//     );

//     setSuccess("Payment submitted successfully!");

//     setPaymentData({
//       email: "",
//       mobile: "",
//       transactionId: "",
//     });
//   } catch (err) {
//     setError("Submission failed");
//   } finally {
//     setLoading(false);
//   }
// };

//   return (
//     <div className="container">
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {success && <p style={{ color: "green" }}>{success}</p>}

//       <div className="payment-section">
//         <img src={qrcode} alt="QR Code" />
//         <p>UPI ID: lumin.education@axl</p>
//       </div>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={paymentData.email}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="tel"
//           name="mobile"
//           placeholder="Mobile"
//           value={paymentData.mobile}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="text"
//           name="transactionId"
//           placeholder="Transaction ID"
//           value={paymentData.transactionId}
//           onChange={handleChange}
//           required
//         />

//         <input type="text" value={courseId || ""} readOnly />
//         <input type="text" value={title || ""} readOnly />

//         <button type="submit" disabled={loading}>
//           {loading ? "Submitting..." : "Submit"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default PaymentForm;

import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import qrcode from "../Assets/Images/qrcode.png";

const PaymentForm = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const courseId = queryParams.get("courseId");
  const title = queryParams.get("title");

  const [paymentData, setPaymentData] = useState({
    email: "",
    mobile: "",
    transactionId: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    const data = {
      email: paymentData.email,
      mobile: paymentData.mobile,
      paymentId: paymentData.transactionId, // matches Apps Script
      courseId: courseId || "",
      courseTitle: title || "", // matches Apps Script
    };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbz3mOsoy4qeVXy5ZHUhnCR1gzf7Th9po6xFiBBovE8x4LLuyHGAXrK-mzwT5Ct6jxrk1A/exec",
        {
          method: "POST",
          mode: "no-cors", // required
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      setSuccess("Payment submitted successfully!");

      setPaymentData({
        email: "",
        mobile: "",
        transactionId: "",
      });
    } catch (err) {
      setError("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}

      <div className="payment-section">
        <img src={qrcode} alt="QR Code" />
        <p>UPI ID: lumin.education@axl</p>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={paymentData.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="mobile"
          placeholder="Mobile"
          value={paymentData.mobile}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="transactionId"
          placeholder="Transaction ID"
          value={paymentData.transactionId}
          onChange={handleChange}
          required
        />

        <input type="text" value={courseId || ""} readOnly />
        <input type="text" value={title || ""} readOnly />

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;