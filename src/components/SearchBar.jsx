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

  return(
    <Autocomplete
      disablePortal
      id="search-bar"
      selectOnFocus
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
            updateSearchInput(e.target.value)
          }}
        />)
      }
    />
  )
};

export default SearchBar;