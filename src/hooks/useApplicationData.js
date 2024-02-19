import { useAppContext } from "../contexts/AppContext";

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

      return {
      ...prevState,
      memoData: [...prevState.memoData, {id: newId, memo: prevState.createMemoText}]
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
    setState((prevState) => ({
      ...prevState,
      memoData: [...prevState.memoData].filter(x => x.id !== memoId)
    }));
  }

  return {
    toggleTheme,
    toggleCreateMemo,
    handleCreateMemoInput,
    addNewMemo,
    deleteMemo
  }
}

export default useApplicationData;