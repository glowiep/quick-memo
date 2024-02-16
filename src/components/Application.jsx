import React from  "react";
// import './styles/Application.scss'
import TopNavigationBar from "./TopNavigationBar";
import MemoList from "./MemoList";

const Application = () => {
  return (
    <main>
      <TopNavigationBar />
      <MemoList />
    </main>
  )
}

export default Application;