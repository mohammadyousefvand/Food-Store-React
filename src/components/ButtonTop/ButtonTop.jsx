import React, { useState } from "react";
import "./ButtonTop.css";

export default function ButtonTop() {
  const [topBtnShow, setTopBtnShow] = useState(false);

  window.onscroll = () => {
    if (window.scrollY > 200) {
      setTopBtnShow(true);
    } else {
      setTopBtnShow(false);
    }
  };

  const scrollHandler = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div
      onClick={scrollHandler}
      className={`top-btn ${topBtnShow && "active"}`}
    >
      <span className="fas fa-angle-up"></span>
    </div>
  );
}
