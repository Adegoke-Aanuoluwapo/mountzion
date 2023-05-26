import React from "react";

const payment = (email, amount) => {
  const paymentForm = document.getElementById("paymentForm");
  paymentForm.addEventListener("submit", payWithPaystack, false);
  function payWithPaystack(e) {
    e.preventDefault();

    const handler = PaystackPop.setup({
      key: "pk_test_eb064e623b2d625c58884613fff1b7a40c273846", // Replace with your public key
      email: document.getElementById("email-address").value,
      amount: document.getElementById("amount").value * 100,
      ref: "" + Math.floor(Math.random() * 1000000000 + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
      // label: "Optional string that replaces customer email"
      onClose:  () => {
        alert("Window closed.");
      },
      callback: (response)=> {
        let message = "Payment complete! Reference: " + response.reference;
        alert(message);
      },
    });
  }

 handler.openIframe();
};

export default payment;
