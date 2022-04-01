import React from "react";

export default function TitleSection({ title }) {
  return (
    <div>
      <img src="images/title-img.png" alt="title" />
      <h2>{title}</h2>
    </div>
  );
}
