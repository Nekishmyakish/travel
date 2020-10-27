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
      .createUserWithEmailAndPassword(email, password)
      .sendSignInLinkToEmail(email, actionCodeSettings)
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
    // Confirm the link is a sign-in with email link.
    if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
      // Additional state parameters can also be passed via URL.
      // This can be used to continue the user's intended action before triggering
      // the sign-in operation.
      // Get the email if available. This should be available if the user completes
      // the flow on the same device where they started it.
      var email = window.localStorage.getItem("emailForSignIn");
      if (!email) {
        // User opened the link on a different device. To prevent session fixation
        // attacks, ask the user to provide the associated email again. For example:
        email = window.prompt("Please provide your email for confirmation");
      }
      // The client SDK will parse the code from the link for you.
      firebase
        .auth()
        .signInWithEmailLink(email, window.location.href)
        .then(function (result) {
          // Clear email from storage.
          window.localStorage.removeItem("emailForSignIn");
          // You can access the new user via result.user
          // Additional user info profile not available via:
          // result.additionalUserInfo.profile == null
          // You can check if the user is new or existing:
          // result.additionalUserInfo.isNewUser
        })
        .catch(function (error) {
          // Some error occurred, you can inspect the code: error.code
          // Common errors could be invalid email and invalid or expired OTPs.
        });
    }
  };

  var actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be whitelisted in the Firebase Console.
    url: "http://localhost:3000",
    // This must be true.
    handleCodeInApp: true,
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
