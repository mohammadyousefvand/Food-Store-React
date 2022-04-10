import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="btn-box">
        <a href="#product">
          <button className="btn">محصولات</button>
        </a>
        <a href="#about">
          <button className="btn">خدمات</button>
        </a>
        <a href="#order">
          <button className="btn">سفارش</button>
        </a>
        <a href="#comment">
          <button className="btn">نظرات</button>
        </a>
        <a href="#galery">
          <button className="btn">گالری تصاویر</button>
        </a>
      </div>
      <p className="author">طراحی شده توسط محمد یوسفوند</p>
    </footer>
  );
}
