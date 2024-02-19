import React from "react";
import '../styles/TopNavigationBar.scss';
import ThemeToggle from "./ThemeToggle";
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';
import IosShareRoundedIcon from '@mui/icons-material/IosShareRounded';
import { Tooltip } from '@mui/material';

const TopNavigationBar = () => {
  return (
    <div className="top-nav-bar">
      
      <span className="top-nav-bar__logo">✨ Quick Memo </span>
      <div className="nav-bar-actions">
        <Tooltip title="Download memos as text file">
          <IosShareRoundedIcon />
        </Tooltip>
        <Tooltip title="Toggle dark mode">
          <ThemeToggle />
        </Tooltip>
      </div>
    </div>
  )
}

export default TopNavigationBar;