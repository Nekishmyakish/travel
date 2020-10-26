import React from "react";
import "./travelItem.css";

export default function TravelItem(props) {
  const [like, setLike] = React.useState(0);
  const [comment, setComment] = React.useState(0);
  return (
    <div>
      <div className="travelItem">
        <div className="travelItem__left-block">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/travel-40b55.appspot.com/o/rH_k3PtQ_400x400%402x.jpg?alt=media&token=61e47700-e857-4996-a8af-cbfff4db0ae4"
            alt="avatar"
            height="85"
            width="85"
            className="travelItem__left-block_avatar"
          ></img>
        </div>
        <div className="travelItem__container">
          <div className="travelItem__header">
            <div className="travelItem__header_text">
              <div className="travelItem__header_text_status">
                <p className="travelItem__header_text_status_userName">
                  {props.userName}
                </p>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/travel-40b55.appspot.com/o/check-mark-pic.svg?alt=media&token=5b77d128-6e18-4ebe-8a0d-3cab4b2c891a"
                  alt="blue-mark"
                  height="15"
                  width="15"
                  className="travelItem__header_text_status_check-mark"
                ></img>
                <p className="travelItem__header_text_repostDate">
                  {props.repostDate}
                </p>
              </div>
              <h4 className="travelItem__header_text_content">
                {props.content}
              </h4>
            </div>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/travel-40b55.appspot.com/o/netflix-pic.png?alt=media&token=3bb6f234-f95e-44fa-910a-d60f7c026ae1"
              alt="content-pic"
              className="travelItem__header_content-pic"
              width="100%"
            ></img>
          </div>
          <div className="travelItem__buttons">
            <button
              className="travelItem__buttons-comment"
              onClick={() => setComment((prevComment) => prevComment + 1)}
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/travel-40b55.appspot.com/o/comment-pic.svg?alt=media&token=4e8f129e-b2a7-45ad-ab26-acafdfecc760"
                alt="comment-pic"
                height="25"
                width="25"
              ></img>
              {comment}
            </button>
            <button
              type="submit"
              className="travelItem__buttons-like"
              onClick={() => setLike((prevLike) => prevLike + 1)}
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/travel-40b55.appspot.com/o/like-pic.svg?alt=media&token=95207349-cfa2-4103-b6ab-71fdf79bd661"
                alt="like-pic"
                height="25"
                width="25"
              ></img>
              {like}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
