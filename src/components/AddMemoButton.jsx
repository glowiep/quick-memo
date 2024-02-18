import React from "react";
import '../styles/AddMemoButton.scss';

import useApplicationData from "../hooks/useApplicationData";

const AddMemoButton = () => {
  const { toggleCreateMemo } = useApplicationData();

  return (
    <div className="add-memo-button">
      <img 
        className="memo__add-button" 
        src="images/add.png"
        alt="Add Memo"
        onClick={() => toggleCreateMemo()}
      />
    </div>
  )
}

export default AddMemoButton;