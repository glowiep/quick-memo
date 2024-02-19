import React from "react";
import '../styles/TopNavigationBar.scss';
import ThemeToggle from "./ThemeToggle";
import IosShareRoundedIcon from '@mui/icons-material/IosShareRounded';

const TopNavigationBar = () => {
  return (
    <div className="top-nav-bar">
      
      <span className="top-nav-bar__logo">✨ Quick Memo </span>
      <div className="nav-bar-actions">
        <IosShareRoundedIcon />
        <ThemeToggle />
      </div>
    </div>
  )
}

export default TopNavigationBar;