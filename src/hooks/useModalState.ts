import React, { useState } from 'react';

const useModalState = () => {
  const [modalState, setModalState] = useState(false);
  const setModal = () => {
    setModalState((st) => (!st));
  };

  const closeModal = (e: React.MouseEvent | React.KeyboardEvent) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains('popup')) {
      setModalState(false);
    }
  };

  return {
    modalState,
    setModal,
    closeModal,
  };
};

export default useModalState;
