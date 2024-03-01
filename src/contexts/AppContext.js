import React, { createContext, useContext, useState } from 'react';

const darkModeSupported = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
const INITIAL_STATE = {
  darkMode: darkModeSupported,
  memoData: [
    {
      id: 0,
      memo: `✨ Welcome to Quick Memo! \n\nClick the big ➕ button above to add a new memo. \n\n✅Refresh the page or close the window without losing your memos! \n✅Export your memos to a text file by clicking the export icon. `
    }
  ],
  showCreateMemo: false,
  createMemoText: "",
  isCopied: false,
  copiedMemoId: null,
  searchValue: "",
  searchInput: "",
  searchInputIDs: []
}

// Create context
const AppContext = createContext();

// Provider component to wrap app
export const AppProvider = ({ children }) => {
  // Entire state of the application
  const [state, setState] = useState(INITIAL_STATE);

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = ()=> {
  return useContext(AppContext)
}