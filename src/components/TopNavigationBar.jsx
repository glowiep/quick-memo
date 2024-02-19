import React from "react";
import '../styles/TopNavigationBar.scss';
import ThemeToggle from "./ThemeToggle";
import IosShareRoundedIcon from '@mui/icons-material/IosShareRounded';
import { Tooltip } from '@mui/material'

const TopNavigationBar = () => {
  return (
    <div className="top-nav-bar">
      
      <span className="top-nav-bar__logo">✨ Quick Memo </span>
      <div className="nav-bar-actions">
        <Tooltip title="Export as text file">
          <IosShareRoundedIcon 
            sx={{
              ":hover": {
                cursor: "pointer",
              }
            }}
          />
        </Tooltip>
        <ThemeToggle />
      </div>
    </div>
  )
}

export default TopNavigationBar;