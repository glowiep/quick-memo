import React from "react";
import '../styles/ClearAllButton.scss';
import { Tooltip } from '@mui/material'
import useApplicationData from "../hooks/useApplicationData";
const ClearAllButton = () => {
  const { clearAll } = useApplicationData();
  return (
    <div className="clear-all">
      <Tooltip title="Clear All">
        <button className="clear-all-btn" onClick={() => clearAll()}>
          Clear All
        </button>
      </Tooltip>
    </div>
  )
}

export default ClearAllButton;