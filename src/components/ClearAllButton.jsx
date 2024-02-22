import React from "react";
import '../styles/ClearAllButton.scss';
import { Tooltip } from '@mui/material'

const ClearAllButton = () => {
  

  return (
    <div className="clear-all">
      <Tooltip title="Clear All">
        <button 
          className="clear-all-btn" 
          onClick={() => console.log("Clear all memos")
        }>
          Clear All
        </button>
      </Tooltip>
    </div>
  )
}

export default ClearAllButton;