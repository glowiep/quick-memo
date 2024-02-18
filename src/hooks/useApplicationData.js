import { useAppContext } from "../contexts/AppContext";

const useApplicationData = () => {
  const { state, setState } = useAppContext();
  
  const toggleTheme = () => {
    setState((prevState) => ({
      ...prevState,
      darkMode: !prevState.darkMode
    }));
  }

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

  return {
    toggleTheme,
    toggleCreateMemo
  }
}

export default useApplicationData;