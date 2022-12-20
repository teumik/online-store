import { useState } from 'react';

function useReverseState() {
  const [isActive, toggleSortState] = useState(true);

  const reverseSort = () => {
    toggleSortState((state) => !state);
  };

  return {
    isActive,
    reverseSort,
  };
}

export default useReverseState;
