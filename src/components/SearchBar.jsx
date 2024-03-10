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
  console.log("Search Bar console log SEARCH INPUT:", state.searchInput)
  console.log("Search Bar what is current memoListData", state.memoListData)
  // Clear search input when the Autocomplete is closed

  return(
    <Autocomplete
      disablePortal
      id="search-bar"
      selectOnFocus
      handleHomeEndKeys
      freeSolo
      disableClearable
      options={memos}
      value={state.searchInput}
      onChange={(e, newValue) => {
        console.log("Console.log(newValue) = ", newValue)
        // updateSearchInput(newValue);
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
        value={state.searchInput}
        />)
      }
    />
  )
};

export default SearchBar;