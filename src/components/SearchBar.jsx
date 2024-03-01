import React from "react";
import { TextField, Autocomplete } from "@mui/material";
// Styling
import '../styles/SearchBar.scss';

import { useAppContext } from "../contexts/AppContext";
import useApplicationData from "../hooks/useApplicationData";

const SearchBar = () => {
  const { updateSearchValue, updateSearchInput } = useApplicationData();
  const { state } = useAppContext();
  const memoData = state.memoData;
  const memos = Array.from(new Set(memoData.map(memo => memo.memo)));

  return(
    <Autocomplete
      disablePortal
      id="search-bar"
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      freeSolo
      options={memos}
      onChange={(e, newValue) => {
        updateSearchValue(newValue)
      }}
      sx={{ width: 250, margin: 1 }}
      renderInput={(params) => (
        <TextField 
          {...params} 
          label="Type to Search" 
          size="small"
          onChange={(e, newValue) => {
            console.log(e.target.value)
            console.log(newValue)
            updateSearchInput(e.target.value)
          }}
        />)
      }
    />
  )
};

export default SearchBar;