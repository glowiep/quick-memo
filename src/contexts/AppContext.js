import React, { createContext, useContext, useReducer } from 'react';

export const ACTIONS = {
  TOGGLE_THEME: 'TOGGLE_THEME',
  
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.TOGGLE_THEME:
      return {
        ...prevState,
        darkMode: !prevState.darkMode
      }
    default:
      throw new Error(
        `Tried to reduce with unsupport action type: ${action.type}`
      );
  }
};

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
  searchInputIDs: [],
  memoListData: []
}

// Create context
const AppContext = createContext();

// Provider component to wrap app
export const AppProvider = ({ children }) => {
  // Entire state of the application
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = ()=> {
  return useContext(AppContext)
};