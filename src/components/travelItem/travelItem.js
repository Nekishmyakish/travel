import React from "react";
import "./travelItem.css";
export default function TravelItem() {
  const [like, setLike] = React.useState(0);
  return (
    <div className="travelItem">
      <div className="travelItem__header">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/travel-40b55.appspot.com/o/rH_k3PtQ_400x400%402x.jpg?alt=media&token=61e47700-e857-4996-a8af-cbfff4db0ae4"
          alt="avatar"
        ></img>
        <p>Netflix</p>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/travel-40b55.appspot.com/o/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%201153%402x.jpg?alt=media&token=a2025865-6135-4aaf-aba6-187dd084d2c9"
          alt="blue-mark"
          height="20"
          width="20"
        ></img>
        <p>@Netflix - 21 May</p>
      </div>
      <h3>Sunday mood: Watching time travel movies to find a way</h3>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/travel-40b55.appspot.com/o/netflix-pic.jpg?alt=media&token=c9103f73-42fc-4cb2-88fd-41974180f2bc"
        alt="netflix-pic"
      ></img>
      <button
        className="like"
        onClick={() => setLike((prevLike) => prevLike + 1)}
      >
        Like {like}
      </button>
    </div>
  );
}
