import React from "react";

export default function Button({ title, link = "#" }) {
  return (
    <div>
      <a href={link} className="btn">
        {title}
      </a>
    </div>
  );
}
