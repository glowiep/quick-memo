import React, { createContext, useContext, useReducer } from 'react';

export const ACTIONS = {
  TOGGLE_THEME: 'TOGGLE_THEME',
  SET_LOCAL_THEME: 'SET_LOCAL_THEME',
  TOGGLE_CREATE_MEMO: 'TOGGLE_CREATE_MEMO',
  HANDLE_CREATE_MEMO_INPUT: 'HANDLE_CREATE_MEMO_INPUT',
  ADD_NEW_MEMO: 'ADD_NEW_MEMO',
  DELETE_MEMO: 'DELETE_MEMO',
  COPY_TEXT_TRUE: 'COPY_TEXT_TRUE',
  COPY_TEXT_FALSE: 'COPY_TEXT_FALSE',
  UPDATE_SEARCH_VALUE: 'UPDATE_SEARCH_VALUE',
  UPDATE_SEARCH_INPUT: 'UPDATE_SEARCH_INPUT',
  USE_LOCAL_STORAGE_MEMO_DATA: 'USE_LOCAL_STORAGE_MEMO_DATA'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.TOGGLE_THEME:
      const updatedMode = !state.darkMode;
      window.localStorage.setItem('darkMode', updatedMode);
      return {
        ...state,
        darkMode: updatedMode
      }
    case ACTIONS.SET_LOCAL_THEME:
      return {
        ...state,
        darkMode: action.payload
      }
    case ACTIONS.TOGGLE_CREATE_MEMO:
      return {
        ...state,
        showCreateMemo: !state.showCreateMemo
      }
    case ACTIONS.HANDLE_CREATE_MEMO_INPUT:
      return {
        ...state,
        createMemoText: action.payload
      }
    case ACTIONS.ADD_NEW_MEMO:
      const newId = crypto.randomUUID();
      // Adds the new memo to the memoData array in state
      const updatedMemoData = [{id: newId, memo: state.createMemoText}, ...state.memoData];
      window.localStorage.setItem('memoData', JSON.stringify(updatedMemoData));
      return {
        ...state,
        memoData: updatedMemoData,
        createMemoText: ""  // Clear createMemoText state to reset text area value
      }
    case ACTIONS.DELETE_MEMO:
      const updateDeleteMemoData = state.memoData.filter(x => x.id !== action.payload);
      window.localStorage.setItem('memoData', JSON.stringify(updateDeleteMemoData));
      return {
        ...state,
        memoData: updateDeleteMemoData
      }
    case ACTIONS.CLEAR_ALL:
      const resetMemoData = [
        {
          id: 0,
          memo: `✨ Welcome to Quick Memo! \n\nClick the big ➕ button above to add a new memo. \n\n✅Refresh the page or close the window without losing your memos! \n✅Export your memos to a text file by clicking the export icon. `
        }
      ];
      window.localStorage.setItem('memoData', JSON.stringify(resetMemoData));
      return {
        ...state,
        memoData: resetMemoData
      };
    case ACTIONS.COPY_TEXT_TRUE:
      return {
        ...state,
        isCopied: true,
        copiedMemoId: action.payload
      }
    case ACTIONS.COPY_TEXT_FALSE:
      return {
        ...state,
        isCopied: false,
        copiedMemoId: null
      }
    case ACTIONS.UPDATE_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload
      }
    case ACTIONS.UPDATE_SEARCH_INPUT:
      return {
        ...state,
        searchInput: action.payload
      }
    case ACTIONS.USE_LOCAL_STORAGE_MEMO_DATA:
      return {
        ...state,
        memoData: action.payload
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