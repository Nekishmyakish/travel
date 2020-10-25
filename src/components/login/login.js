import React from "react";
import "./login.css";
export default function Login() {
  return (
    <div className="login__container">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/travel-40b55.appspot.com/o/twitter-pic.svg?alt=media&token=f30ab919-b721-4603-bb15-83a024cda73a"
        alt="twitter-pic"
        height="40"
        width="40"
        className="login__twitter-pic"
      ></img>
      <h2 className="login__header">Log in to Twitter</h2>
      <p className="text">Phone, email or username</p>
      <input
        type="text"
        value="example@gmail.com"
        className="login__id"
      ></input>
      <p className="text">Password</p>
      <input type="text" className="login__password"></input>
      <button className="login__button">Log In</button>
      <a href="URL" className="login__pas-recovery">
        Forgot password?
      </a>
    </div>
  );
}
