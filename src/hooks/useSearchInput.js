import { useEffect } from "react";
import { ACTIONS, useAppContext } from '../contexts/AppContext';

/**
 * A custom hook for loading memos based on the search value.
 * @function
*/
const useSearchInput = () => {
  const { state, dispatch } = useAppContext();
  const { searchInput } = state;

  useEffect(() => {
    if (searchInput === null)  {
      dispatch({type: ACTIONS.UPDATE_MEMO_LIST_ALL_DATA})
    }
  }, [searchInput]);
};

export default useSearchInput;