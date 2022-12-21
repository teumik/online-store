import { useContext, useState } from 'react';
import DataContext from '../context/data.context';

function useReverseState(callbackAscending: () => void, callbackDescending: () => void) {
  const [isActive, toggleSortState] = useState(true);
  const ctx = useContext(DataContext);

  const reverseSort = () => {
    if (isActive) {
      callbackAscending.call(ctx);
    } else {
      callbackDescending.call(ctx);
    }

    toggleSortState((state) => !state);
  };

  return {
    isActive,
    reverseSort,
  };
}

export default useReverseState;
