import { useAppContext } from "../contexts/AppContext";

const useApplicationData = () => {
  const { state, setState } = useAppContext();
  
  const toggleTheme = () => {
    setState((prevState) => ({
      ...prevState,
      darkMode: !prevState.darkMode
    }));
  }

  return {
    toggleTheme
  }
}

export default useApplicationData;