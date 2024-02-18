import React, { createContext, useContext, useState } from 'react';

const INITIAL_STATE = {
  darkMode: false,
  memoData: [],
  showCreateMemo: false
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