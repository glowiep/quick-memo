import React from "react";
// import '../styles/NewMemo.scss';

const NewMemo = () => {
  return (
    <main className="top-nav-bar">
      <img 
        className="memo__add-button" 
        src="images/add.png"
        alt="Add Memo"
        onClick={() => console.log("Add new memo button clicked")}
      />
    </main>
  )
}

export default NewMemo;