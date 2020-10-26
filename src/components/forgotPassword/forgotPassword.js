import React from "react";
import "./forgotPassword.css";
import firebase from "firebase";
export default function ForgotPassword() {
  return (
    <div className="forgotPassword__container">
      <h2 className="forgotPassword_header">Reset your password</h2>
      <p className="forgotPassword_text">
        Enter your user account's verified email <br />
        address and we will send you a password <br />
        reset link.
      </p>
      <input type="text" className="forgotPassword_input"></input>
      <button className="forgotPassword_button">
        Send password reset email
      </button>
    </div>
  );
}
