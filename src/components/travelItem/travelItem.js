import React from "react";
import "./travelItem.css";
export default function TravelItem() {
  const [like, setLike] = React.useState(0);
  return (
    <div className="travelItem">
      <div className="travelItem__header">
        <p>Netflix</p>
        <p>@Netflix - 21 May</p>
      </div>
      <h3>Sunday mood: Watching time travel movies to find a way</h3>
      <img src="" alt=""></img>
      <button
        className="like"
        onClick={() => setLike((prevLike) => prevLike + 1)}
      >
        Like {like}
      </button>
    </div>
  );
}
