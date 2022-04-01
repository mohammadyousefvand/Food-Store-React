import React from "react";
import TitleSection from "../TitleSection/TitleSection";
import CommentItem from "./CommentItem/CommentItem";
import "./Comment.css";

export default function Comment() {
  return (
    <section className="comment-container" id="comment">
      <TitleSection title="نظرات مشتریان ما" />
      <div className="comment-box">
        <CommentItem image="images/pic1.png" />
        <CommentItem image="images/pic2.png" />
        <CommentItem image="images/pic3.png" />
      </div>
    </section>
  );
}
