import React from "react";
import Button from "../Button/Button";
import "./SectionOne.css";

export default function SectionOne() {
  return (
    <section className="section">
      <div className="hamberger-image">
        <img src="images/product-1.png" alt="hamberger" />
      </div>
      <div className="section-one-bio">
        <h1>تقدیم با عشق</h1>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است{" "}
        </p>
        <Button title="نمایش بیشتر" />
      </div>
    </section>
  );
}
