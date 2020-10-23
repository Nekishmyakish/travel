import React from "react";
import "./login.css";
export default function Login() {
  return (
    <div className="login__container">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/travel-40b55.appspot.com/o/twitter-pic.png?alt=media&token=f9265dbb-75bc-4c84-b010-d449a4a811ae"
        alt="twitter-pic"
        height="30"
        width="30"
      ></img>
      <h4>Log In to Twitter</h4>
      <p>Phone, email or username</p>
      <input type="text"></input>
      <p>Password</p>
      <input type="text"></input>
      <button>Log In</button>
      <a href="#">Forgot password?</a>
    </div>
  );
}
