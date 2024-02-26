import React from "react";
import '../styles/AddMemoButton.scss';
import { Tooltip } from '@mui/material'

import useApplicationData from "../hooks/useApplicationData";

const AddMemoButton = () => {
  const { toggleCreateMemo } = useApplicationData();

  return (
    <div className="add-memo-button">
      <Tooltip title="Create new Memo">
        <img 
          className="memo__add-button" 
          src="../../public/images/add.png"
          alt="Create new Memo"
          onClick={() => toggleCreateMemo()}
        />
      </Tooltip>
    </div>
  )
}

export default AddMemoButton;