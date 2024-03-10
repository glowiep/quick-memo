import React, { useEffect } from "react";
import { ACTIONS, useAppContext } from "../contexts/AppContext";
import useApplicationData from "../hooks/useApplicationData";

import IconButton from '@mui/material/IconButton';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import NightsStayRoundedIcon from '@mui/icons-material/NightsStayRounded';
import { Tooltip } from '@mui/material';

const ThemeToggle = () => {
  const { state, dispatch } = useAppContext();

  const { toggleTheme } = useApplicationData();

  useEffect(() => {
    const localTheme = window.localStorage.getItem('darkMode');
    if (localTheme) {
      dispatch({ type: ACTIONS.SET_LOCAL_THEME, payload: localTheme === 'true' });
    }
  }, [state.darkmode, dispatch])
  

  return (
    <div>
      <Tooltip title="Toggle dark mode">
        <IconButton sx={{ ml: 1 }} color="inherit" onClick={() => toggleTheme()}>
          {state.darkMode ? <NightsStayRoundedIcon /> : <LightModeRoundedIcon />}
        </IconButton>
      </Tooltip>
    </div>
  );
}


export default ThemeToggle;