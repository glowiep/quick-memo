import React, { useEffect } from "react";
import { useAppContext } from "../contexts/AppContext";
import useApplicationData from "../hooks/useApplicationData";

import IconButton from '@mui/material/IconButton';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import NightsStayRoundedIcon from '@mui/icons-material/NightsStayRounded';
import { Tooltip } from '@mui/material';

const ThemeToggle = () => {
  const { state, setState } = useAppContext();

  const { toggleTheme } = useApplicationData();

  useEffect(() => {
    const localTheme = window.localStorage.getItem('darkMode');
    if (localTheme) {
      setState((prevState) => ({
        ...prevState,
        darkMode: localTheme === 'true'
      }))
    }
  }, [state.darkmode])
  

  return (
    <div>
      <Tooltip title="Toggle dark mode">
        <IconButton sx={{ ml: 1 }} color="inherit" onClick={() => toggleTheme()}>
          {state.darkMode === 'true' ? <NightsStayRoundedIcon /> : <LightModeRoundedIcon />}
        </IconButton>
      </Tooltip>
    </div>
  );
}


export default ThemeToggle;