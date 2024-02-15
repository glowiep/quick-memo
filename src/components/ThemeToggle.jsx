import React from "react";
import { useAppContext } from "../contexts/AppContext";
import useApplicationData from "../hooks/useApplicationData";

import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';


const ThemeToggle = () => {
  const { state } = useAppContext();
  const darkMode = state;

  const { toggleTheme } = useApplicationData();

  return (
    <div>
      <IconButton sx={{ ml: 1 }} color="inherit" onClick={() => toggleTheme()}>
        {darkMode === 'true' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </div>
  );
}


export default ThemeToggle;