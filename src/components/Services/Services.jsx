import React from "react";
import TitleSection from "../TitleSection/TitleSection";
import Box from "./Box/Box";
import "./Services.css";

export default function Services() {
  return (
    <article className="works">
      <TitleSection title="به ما اطمینان کنید" />
      <div className="works-Box">
        <Box icon="fas fa-hamburger" text="تجربه عالی" />
        <Box icon="fas fa-shipping-fast" text="ارسال رایگان" />
        <Box icon="fas fa-headset" text="پشتیبانی ۲۴ ساعته" />
      </div>
    </article>
  );
}
