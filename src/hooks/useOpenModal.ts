import { useState } from 'react';

function useOpenModal() {
  const [isOpen, setOpen] = useState(false);

  function toggleOpen() {
    setOpen((state) => !state);
  }

  return {
    isOpen,
    toggleOpen,
  };
}

export default useOpenModal;
