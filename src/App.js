import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardholderName, setCardholderName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [creditLimit, setCreditLimit] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleCreditCard = (e) => {
    const cardNumber = e.target.value;
    if (cardNumber.length <= 12 && /^\d*$/.test(cardNumber)) {
      setCardNumber(cardNumber);
      setErrors((prevErrors) => ({ ...prevErrors, cardNumber: "" }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        cardNumber: "Please enter a valid number with maximum 12 digits"
      }));
    }
  };

  const handleCvv = (e) => {
    const cvv = e.target.value;
    if (cvv.length <= 3 && /^\d*$/.test(cvv)) {
      setCvv(cvv);
      setErrors((prevErrors) => ({ ...prevErrors, cvv: "" }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        cvv: "Please enter a valid number with 3 digits"
      }));
    }
  };

  const handleLimit = (e) => {
    const limit = e.target.value;
    if (limit === "") {
      setCreditLimit("");
      setErrors((prevErrors) => ({ ...prevErrors, creditLimit: "" }));
    } else if (/^\d*$/.test(limit) && parseInt(limit, 10) <= 10000) {
      setCreditLimit(limit);
      setErrors((prevErrors) => ({ ...prevErrors, creditLimit: "" }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        creditLimit: "Please enter an amount up to 10000"
      }));
    }
  };

  const handlename = (e) => {
    const enteredName = e.target.value;
    if (enteredName.length <= 100 && /^[A-Za-z\s]+$/.test(enteredName)) {
      setCardholderName(enteredName);
      setErrors((prevErrors) => ({ ...prevErrors, cardholderName: "" }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        cardholderName:
          "Please enter a valid name (alphabetic characters and spaces only)"
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = {};
    setSubmitted(true);

    // Perform additional validation logic if needed
    // Example: Check if all fields are filled before submission

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      // Submit the form
    }
  };

  return (
    <div
      style={{ backgroundColor: "lightblue", width: "1000px", margin: "auto" }}
    >
      <h1 style={{ textAlign: "center" }}>Credit Card Management System</h1>
      <form onSubmit={handleSubmit} style={{ marginLeft: "20% " }}>
        <label htmlFor="cardholder_name">Cardholder Name:</label>{" "}
        <input
          type="text"
          id="cardholder_name"
          value={cardholderName}
          onChange={handlename}
          required
        />
        {errors.cardholderName && (
          <p style={{ color: "red" }}>{errors.cardholderName}</p>
        )}
        <br />
        <label htmlFor="card_number">Credit Card Number:</label>{" "}
        <input
          type="text"
          id="card_number"
          value={cardNumber}
          onChange={handleCreditCard}
          required
        />
        {errors.cardNumber && (
          <p style={{ color: "red" }}>{errors.cardNumber}</p>
        )}
        <br />
        <label htmlFor="expiry_date">Expiry Date:</label>{" "}
        <input
          type="date"
          id="expiry_date"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          placeholder="MM/YY"
          required
        />
        <br />
        <label htmlFor="cvv">CVV:</label>{" "}
        <input type="text" id="cvv" value={cvv} onChange={handleCvv} required />
        {errors.cvv && <p style={{ color: "red" }}>{errors.cvv}</p>}
        <br />
        <label htmlFor="credit_limit">Credit Limit:</label>{" "}
        <input
          type="text"
          id="credit_limit"
          value={creditLimit}
          onChange={handleLimit}
          required
        />
        {errors.creditLimit && (
          <p style={{ color: "red" }}>{errors.creditLimit}</p>
        )}
        <br />
        <p style={{ display: "inline-flex", alignItems: "center" }}>
          <label htmlFor="billing_address">Billing Address:</label>{" "}
          <textarea
            id="billing_address"
            value={billingAddress}
            onChange={(e) => setBillingAddress(e.target.value)}
            required
          />
        </p>
        <br />
        <input type="submit" value="Submit" />
      </form>
      <hr />
      {submitted && (
        <div style={{ marginLeft: "50Px" }}>
          <h2>Submitted Data:</h2>
          <p>
            <strong>Credit Card Number:</strong> {cardNumber}
          </p>
          <p>
            <strong>Cardholder Name:</strong> {cardholderName}
          </p>
          <p>
            <strong>Expiry Date:</strong> {expiryDate}
          </p>
          <p>
            <strong>CVV:</strong> {cvv}
          </p>
          <p>
            <strong>Credit Limit:</strong> {creditLimit}
          </p>
          <p>
            <strong>Billing Address:</strong> {billingAddress}
          </p>
        </div>
      )}
    </div>
  );
}
