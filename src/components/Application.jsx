import React, { useState } from  "react";
// import './styles/Application.scss'
import TopNavigationBar from "./TopNavigationBar";

const Application = () => {
  const { darkMode, setDarkMode } = useState();
  
  return (
    <TopNavigationBar />
  )
}

export default Application;