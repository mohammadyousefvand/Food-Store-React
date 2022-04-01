import React from "react";

export default function CommentItem({ image }) {
  return (
    <div className="comment-item">
      <img src={image} />
      <div className="icon-box">
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star-o"></span>
      </div>
      <p>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است{" "}
      </p>
    </div>
  );
}
