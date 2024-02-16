import React from "react";
import '../styles/AddMemoButton.scss';

const AddMemoButton = () => {
  return (
    <div className="add-memo-button">
      <img 
        className="memo__add-button" 
        src="images/add.png"
        alt="Add Memo"
        onClick={() => console.log("Add new memo button clicked")}
      />
    </div>
  )
}

export default AddMemoButton;