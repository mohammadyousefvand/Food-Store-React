import React from "react";
import Button from "../Button/Button";
import IconAbout from "./IconAbout/IconAbout";
import "./About.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="image">
        <img src="images/product-4.png" alt="about" />
      </div>
      <div className="content">
        <img src="images/title-img.png" alt="title" />
        <h3 className="title">قدم نهادن در بهشت همبرگر ها</h3>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است{" "}
        </p>
        <div className="icons">
          <IconAbout title="قیمت مناسب" />
          <IconAbout title="خدمات عالی" />
          <IconAbout title="مواد غذایی تازه" />
          <IconAbout title="نان پخته شده" />
          <IconAbout title="پنیر طبیعی" />
          <IconAbout title="گیاهی و غیر گیاهی" />
        </div>
        <Button title="بیشتر خواندن" />
      </div>
    </section>
  );
}
