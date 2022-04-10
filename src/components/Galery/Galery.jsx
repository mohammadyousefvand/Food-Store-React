import React from "react";
import TitleSection from "../TitleSection/TitleSection";
import GaleryItem from "./GaleryItem/GaleryItem";
import "./Galery.css";

export default function Galery() {
  return (
    <div className="galery" id="galery">
      <TitleSection title="گالری تصاویر برتر" />
      <div className="galery-box">
        <GaleryItem image="images/p-1.jpg" />
        <GaleryItem image="images/p-5.jpg" />
        <GaleryItem image="images/blog-2.jpg" />
      </div>
      <div className="galery-box">
        <GaleryItem image="images/s-img-1.jpg" />
        <GaleryItem image="images/g-7.jpg" />
        <GaleryItem image="images/s-img-2.jpg" />
      </div>
    </div>
  );
}
