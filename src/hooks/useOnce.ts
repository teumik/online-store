import { useState } from 'react';

const useOnce = (callback: () => void) => {
  const [state, setState] = useState(false);

  return () => {
    if (state) return;
    setState(true);
    callback();
  };
};

export default useOnce;
