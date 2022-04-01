import React from "react";

export default function Box({ icon, text }) {
  return (
    <div className="box">
      <i className={icon}></i>
      <h3>{text}</h3>
      <p>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است.
      </p>
    </div>
  );
}
