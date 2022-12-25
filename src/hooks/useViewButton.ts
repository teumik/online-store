import { useState } from 'react';

function useViewButton() {
  const [viewState, setView] = useState(false);

  function toggleView() {
    setView((state) => !state);
  }

  return {
    viewState,
    toggleView,
  };
}

export default useViewButton;
