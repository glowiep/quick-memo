import React from "react";
import { TextField, Autocomplete } from "@mui/material";

import { useAppContext } from "../contexts/AppContext";
import useApplicationData from "../hooks/useApplicationData";
import useSearchInput from "../hooks/useSearchInput";

const SearchBar = () => {
  const { updateSearchValue, updateSearchInput } = useApplicationData();
  const { state } = useAppContext();
  const memoData = state.memoData;
  const memos = Array.from(new Set(memoData.map(memo => memo.memo)));

  useSearchInput();
  
  // Clear search input when the Autocomplete is closed
  const handleAutocompleteClear = () => {
    updateSearchInput("");
  }

  return(
    <Autocomplete
      disablePortal
      id="search-bar"
      selectOnFocus
      handleHomeEndKeys
      freeSolo
      disableClearable
      options={memos}
      onChange={(e, newValue) => {
        updateSearchValue(newValue)
      }}
      onClear={handleAutocompleteClear}
      sx={{ width: 250, margin: 1 }}
      renderInput={(params) => (
        <TextField 
        {...params} 
        label="Type to Search" 
        size="small"
        onChange={(e, newValue) => {
          updateSearchInput(e.target.value)
        }}
        value={state.searchInput}
        />)
      }
    />
  )
};

export default SearchBar;