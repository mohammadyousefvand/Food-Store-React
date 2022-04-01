import React from "react";

export default function Nav(props) {
  return (
    <ul className={`nav ${(props.isShow) && 'nav-show'}`}>
      <li>
        <a href="#">خانه</a>
      </li>
      <li>
        <a href="#product">محصولات</a>
      </li>
      <li>
        <a href="#order">سفارش</a>
      </li>
      <li>
        <a href="#about">درباره ما</a>
      </li>
    </ul>
  );
}
