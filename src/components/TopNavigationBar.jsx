import React from "react";
import '../styles/TopNavigationBar.scss';
import ThemeToggle from "./ThemeToggle";

const TopNavigationBar = () => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">✨ Quick Memo</span>
      <ThemeToggle />
    </div>
  )
}

export default TopNavigationBar;