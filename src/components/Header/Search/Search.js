import React from "react";
import "./Search.css";

export default function Search(props) {

  const closeHandler = () => {
    props.onSearch()
  }
  return (
    <div className={`search-container ${props.isSearch && 'show-search'}`}>
      <span onClick={closeHandler} className="fa fa-times close"></span>
      <input type="text" placeholder="  جستجو کنید..." />
      <span className="fas fa-search"></span>
    </div>
  );
}
