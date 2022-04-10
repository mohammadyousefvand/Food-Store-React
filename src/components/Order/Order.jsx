import React from "react";
import Button from "../Button/Button";
import TitleSection from "../TitleSection/TitleSection";
import Input from "./Input/Input";
import "./Order.css";

export default function Order() {
  return (
    <section className="order" id="order">
      <TitleSection title="سفارش دهید" />
      <div className="bottom-order">
        <div className="order-img">
          <img src="images/order-img.jpg" alt="order" />
        </div>
        <div className="input-order">
          <div className="inputs-wrap-box">
            <Input type="text" text="نام" />
            <Input type="email" text="ایمیل" />
            <Input type="number" text="شماره همراه" />
            <Input type="text" text="نام غذا" />
          </div>
          <textarea cols="30" rows="10" placeholder="آدرس"></textarea>
        </div>
      </div>
      <Button title="سفارش دهید" />
    </section>
  );
}
