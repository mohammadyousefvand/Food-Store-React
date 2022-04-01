import React,{useState} from "react";
import "./Header.css";
import Logo from "./Logo/Logo";
import Nav from "./Nav/Nav";
import Icons from "./Icons/Icons";
import "./Header.css";
import Search from "./Search/Search";

function Header () {

  const [isShow, setIsShow] = useState(false)
  const [isSearchShow, setIsSearchShow] = useState(false)

  const navHandler = () => {
    setIsShow(prevIsShow => {
      return !prevIsShow
    })
  }

  const searchHandler = () => {
    setIsSearchShow(prevIsShow => {
      return !prevIsShow
    })
  }

  window.onscroll = () => {
    if (document.documentElement.scrollTop > 0) {
      setIsShow(false)
    }
  }
  
  return (
    <header className="header">
      <Logo />
      <Nav isShow={isShow} />
      <Icons onNav={navHandler} isShow={isShow} onSearch={searchHandler} />
      <Search isSearch={isSearchShow} onSearch={searchHandler} />
    </header>
  );
}

export default Header;
