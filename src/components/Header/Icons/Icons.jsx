import React from "react";

export default function Icons(props) {

  const clickHandler = () => {
      props.onNav()
  }

  const searchHandler = () => {
    props.onSearch()
  }

  return (
    <div className="icon">
      <span onClick={clickHandler} id="menu-btn" className={props.isShow ? 'fa fa-times rotate' : 'fas fa-bars'}></span>
      <span onClick={searchHandler} className="fas fa-search search_btn"></span>
      <span className="fas fa-shopping-cart"></span>
    </div>
  );
}
