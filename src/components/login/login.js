import React from "react";
import "./login.css";
import firebase from "firebase";
export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .auth()
      // .sendAuthEmail(email)
      // {
      //   var actionCodeSettings = {
      //     // URL you want to redirect back to. The domain (www.example.com) for this
      //     // URL must be whitelisted in the Firebase Console.
      //     url: 'http://localhost:3000',
      //     // This must be true.
      //     handleCodeInApp: true,
      //     dynamicLinkDomain: 'example.page.link'
      // };
      .createUserWithEmailAndPassword(email, password)
      .then((data) => {
        return data.user.getIdToken();
      })
      .then((token) => {
        console.log(token);
      })
      .catch((error) => {
        console.error(error);
      });
    alert(password);
    setEmail("");
    setPassword("");
  };

  return (
    <form className="login__container" onSubmit={handleSubmit}>
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
        value={email}
        className="login__id"
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <p className="text">Password</p>
      <input
        type="password"
        value={password}
        className="login__password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <input type="submit" className="login__button"></input>
      <a href="URL" className="login__pas-recovery">
        Forgot password?
      </a>
    </form>
  );
}
