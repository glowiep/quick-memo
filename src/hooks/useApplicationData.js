import { ACTIONS, useAppContext } from "../contexts/AppContext";
import { saveAs } from "file-saver";
const useApplicationData = () => {
  const { state, dispatch } = useAppContext();
  
  /**
   * This function is called when the darkMode toggle is clicked
   * @function
   * @returns {void}
   */
  const toggleTheme = () => {
    dispatch({ type: ACTIONS.TOGGLE_THEME });
  };

  /**
   * This function is called when the + button is clicked to expand the section to add a new memo
   * @function
   * @returns {void}
   */
  const toggleCreateMemo = () => {
    dispatch({ type: ACTIONS.TOGGLE_CREATE_MEMO });
  };

  /**
   * This function is called when the + button is clicked to expand the section to add a new memo
   * @function
   * @param {React.ChangeEvent<HTMLInputElement>} event - The change event
   * @returns {void}
   */
  const handleCreateMemoInput = (event) => {
    dispatch({ type: ACTIONS.HANDLE_CREATE_MEMO_INPUT, payload: event.target.value });
  };

  /**
   * This handles the click event for the 'Add Memo' button.
   * This adds the new memo and clears the text area value
   * @function
   * @param {React.ChangeEvent<HTMLInputElement>} event - The change event
   * @returns {void}
   */
  const addNewMemo = () => {
    if (state.createMemoText.length === 0) {
      return console.log("Cannot sumbit empty memo!");
    }
    dispatch({ type: ACTIONS.ADD_NEW_MEMO });
  };

  /**
   * This handles the click event for the delete memo trash icon
   * @function
   * @param {number} - memoId
   * @returns {void}
   */
  const deleteMemo = (memoId) => {
    dispatch({ type: ACTIONS.DELETE_MEMO, payload: memoId });
  };

  /**
   * This function exports the memoData as a readable text file. 
   * This is used as a handle click event in the TopNavigationBar component.
   * @function
   * @returns {void}
   */
  const exportMemoData = () => {
    const memoData = state.memoData;

    // Helper function to concatenate all memo strings into a readable format
    const getFileData = () => {
      let stringData = ""
      for (let i = memoData.length - 1; i >= 0; i--) {
        stringData += `Memo #${memoData[i].id + 1}:\n` + memoData[i].memo + "\n\n"
      }
      console.log(stringData);
      return stringData;
    }

    const fileData = getFileData();
    // Turn file data into a blob to create a new blob object
    const blob = new Blob([fileData], { type: "text/plain;charset=utf-8" });  
    saveAs(blob, "memo-export.txt");
  }

  /**
   * This clears all memos in the list and reset it to the initial state
   * @function
   * @returns {void}
   */
  const clearAll = () => {
    dispatch({ type: ACTIONS.CLEAR_ALL });
  };


  // Helper function that accepts text as an argument and copies it to the user’s clipboard
  async function copyTextToClipboard(text) {
    if ('clipboard' in navigator) {
      // if the browser supports the Clipboard API
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  };

  /**
   * This copies the memo text to the users clipboard
   * @function
   * @returns {void}
   */
  const copyMemo = (memoId) => {
    const memoText = state.memoData.filter(memo => memo.id === memoId)[0].memo;
    
    copyTextToClipboard(memoText)
      .then(() => {
        // If successful, update the isCopied state value
        dispatch({ type: ACTIONS.COPY_TEXT_TRUE, payload: memoId});

        setTimeout(() => {
          dispatch({ type: ACTIONS.COPY_TEXT_FALSE });
        }, 1500)
      })
      .catch((err) => {
        console.log(err);
      })
  };

  /** Updates the searchValue state based on the selected search value
   * @function
   * @returns {void}
   */
  const updateSearchValue = (newValue) => {
    dispatch({ type: ACTIONS.UPDATE_SEARCH_VALUE, payload: newValue });
  };

  /** Updates the searchInput state based on the search input field
   * @function
   * @returns {void}
   */
  const updateSearchInput = (input) => {
    dispatch({ type: ACTIONS.UPDATE_SEARCH_INPUT, payload: input })
  };
  

  return {
    toggleTheme,
    toggleCreateMemo,
    handleCreateMemoInput,
    addNewMemo,
    deleteMemo,
    exportMemoData,
    clearAll,
    copyMemo,
    updateSearchValue,
    updateSearchInput
  };
};

export default useApplicationData;