import { useEffect } from "react";
import { ACTIONS, useAppContext } from '../contexts/AppContext';

/**
 * A custom hook for loading memos based on the search value.
 * @function
*/
const useLocalStorage = () => {
  const { state, dispatch } = useAppContext();

  // Effect for handling memo data saved in local storage
  useEffect(() => {
    const localMemoData = window.localStorage.getItem('memoData');
    if (localMemoData) {
      const parsedMemoData = JSON.parse(localMemoData);
      // Set memoData in state
      dispatch({ type: ACTIONS.USE_LOCAL_STORAGE_MEMO_DATA, payload: parsedMemoData });
    } else {
      // If localMemoData is not defined, set the default value in local storage
      window.localStorage.setItem('memoData', JSON.stringify(state.memoData));
    }
  }, [])
};

export default useLocalStorage;