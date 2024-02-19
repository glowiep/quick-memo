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

  return {
    toggleTheme,
    toggleCreateMemo,
    handleCreateMemoInput
  }
}

export default useApplicationData;