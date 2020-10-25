import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyAMpvkIR-t2omJ4Ql3NnrLc8CU62OW1qaQ",
  authDomain: "travel-40b55.firebaseapp.com",
  databaseURL: "https://travel-40b55.firebaseio.com",
  projectId: "travel-40b55",
  storageBucket: "travel-40b55.appspot.com",
  messagingSenderId: "516380663382",
  appId: "1:516380663382:web:24f9799e92852e68db25f7",
  measurementId: "G-QMTLJ0WD4R"
});            

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
