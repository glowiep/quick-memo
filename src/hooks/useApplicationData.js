import { useAppContext } from "../contexts/AppContext";
import { saveAs } from "file-saver";
const useApplicationData = () => {
  const { state, setState } = useAppContext();
  
  /**
   * This function is called when the darkMode toggle is clicked
   * @function
   * @returns {void}
   */
  const toggleTheme = () => {
    setState((prevState) => {
      const updatedMode = !prevState.darkMode;
      window.localStorage.setItem('darkMode', updatedMode);
      
      return {
        ...prevState,
        darkMode: !prevState.darkMode
      }
    });
  }

  /**
   * This function is called when the + button is clicked to expand the section to add a new memo
   * @function
   * @returns {void}
   */
  const toggleCreateMemo = () => {
    if (state.showCreateMemo) {
      setState((prevState) => ({
        ...prevState,
        showCreateMemo: false
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        showCreateMemo: true
      }));
    }
  }

  /**
   * This function is called when the + button is clicked to expand the section to add a new memo
   * @function
   * @param {React.ChangeEvent<HTMLInputElement>} event - The change event
   * @returns {void}
   */
  const handleCreateMemoInput = (event) => {
    setState((prevState) => ({
      ...prevState,
      createMemoText: event.target.value
    }));
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
    
    // Adds the new memo to the memoData array in state
    setState((prevState) => {
      const newId = prevState.memoData.length;

      const updatedMemoData = [{id: newId, memo: prevState.createMemoText}, ...prevState.memoData];

      window.localStorage.setItem('memoData', JSON.stringify(updatedMemoData))
      return {
      ...prevState,
      memoData: updatedMemoData
      }
    });

    // Clear createMemoText state to reset text area value
    setState((prevState) => ({
      ...prevState,
      createMemoText: ""
    }));
  }

  /**
   * This handles the click event for the delete memo trash icon
   * @function
   * @param {number} - memoId
   * @returns {void}
   */
  const deleteMemo = (memoId) => {
    setState((prevState) => {
      const updatedMemoData = [...prevState.memoData].filter(x => x.id !== memoId);
      window.localStorage.setItem('memoData', JSON.stringify(updatedMemoData));
      
      return {
        ...prevState,
        memoData: updatedMemoData
      }
    });
  }

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
      for (let i = 0; i < memoData.length; i++) {
        stringData += `Memo #${i + 1}:\n` + memoData[i].memo + "\n\n"
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
    setState((prevState) => {
      const resetMemoData = [
        {
          id: 0,
          memo: `✨ Welcome to Quick Memo! \n\nClick the big ➕ button above to add a new memo. \n\n✅Refresh the page or close the window without losing your memos! \n✅Export your memos to a text file by clicking the export icon. `
        }
      ];
      window.localStorage.setItem('memoData', JSON.stringify(resetMemoData));
      
      return {
        ...prevState,
        memoData: resetMemoData
      }
    });
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
        setState((prevState) => ({
          ...prevState,
          isCopied: true,
          copiedMemoId: memoId
        }));

        setTimeout(() => {
          setState((prevState) => ({
            ...prevState,
            isCopied: false,
            copiedMemoId: null
          }));
        }, 1500)
      })
      .catch((err) => {
        console.log(err);
      })
  };
  

  return {
    toggleTheme,
    toggleCreateMemo,
    handleCreateMemoInput,
    addNewMemo,
    deleteMemo,
    exportMemoData,
    clearAll,
    copyMemo
  }
}

export default useApplicationData;