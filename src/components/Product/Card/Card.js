import React from "react";
import Button from "../../Button/Button";

export default function Card({ image }) {
  return (
    <div className="item-card swiper-slide">
      <img src={image} alt="card" />
      <p className="name">همبرگر پنیر</p>
      <p className="price">۲۰۰۰۰ تومان</p>
      <Button title="سفارش" />
    </div>
  );
}
