import React from "react";
import "./travelItem.css";

export default function TravelItem(props) {
  const [like, setLike] = React.useState(0);
  return (
    <div>
      <div className="travelItem">
        <div className="travelItem__pics">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/travel-40b55.appspot.com/o/rH_k3PtQ_400x400%402x.jpg?alt=media&token=61e47700-e857-4996-a8af-cbfff4db0ae4"
            alt="avatar"
            height="85"
            width="85"
          ></img>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/travel-40b55.appspot.com/o/repost-arrows.png?alt=media&token=da8e6a01-328f-40b5-bc70-b1234c3f3a50"
            alt="repost-arrows"
            height="25"
            width="35"
          ></img>
        </div>
        <div className="travelItem__header">
          <div className="travelItem__header_text">
            <div className="travelItem__header_text_netflix-title">
              <p className="travelItem__header_text_netflix-title_netflix">
                {props.userName}
              </p>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/travel-40b55.appspot.com/o/%D0%A1%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%201153%402x.jpg?alt=media&token=a2025865-6135-4aaf-aba6-187dd084d2c9"
                alt="blue-mark"
                height="15"
                width="15"
                className="travelItem__header_text_netflix-title_blue-mark"
              ></img>
              <p className="travelItem__header_text_netflix-title_netflix-dog">
                @Netflix - 21 May
              </p>
            </div>
            <h3 className="travelItem__header_text_sunday">{props.content}</h3>
          </div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/travel-40b55.appspot.com/o/netflix-pic.jpg?alt=media&token=c9103f73-42fc-4cb2-88fd-41974180f2bc"
            alt="netflix-pic"
            className="travelItem__netflix-pic"
          ></img>
        </div>
      </div>
      <div className="travelItem__buttons">
        <button
          className="like"
          onClick={() => setLike((prevLike) => prevLike + 1)}
        >
          Comment {like}
        </button>
        <button
          className="like"
          onClick={() => setLike((prevLike) => prevLike + 1)}
        >
          Repost {like}
        </button>
        <button
          className="like"
          onClick={() => setLike((prevLike) => prevLike + 1)}
        >
          Like {like}
        </button>
      </div>
    </div>
  );
}
