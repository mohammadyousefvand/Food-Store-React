import React from "react";

export default function Input({ type, text }) {
  return <input className="input-wrap" type={type} placeholder={text} />;
}
