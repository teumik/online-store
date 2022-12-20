import { useState } from 'react';

function useCartButtonState() {
  const [{ isActive, isHover }, toggleState] = useState({ isActive: false, isHover: false });

  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (event.type === 'mouseenter' || event.type === 'mouseleave') {
      toggleState((state) => ({ ...state, isHover: !state.isHover }));
    }
    if (event.type === 'click') {
      toggleState((state) => ({ ...state, isActive: !state.isActive }));
    }
  };

  const getInnerText = () => {
    if (isActive) {
      if (isHover && isActive) return 'Remove from cart';
      return 'In the cart';
    }
    return 'Add to cart';
  };

  return {
    isActive,
    isHover,
    buttonHandler,
    getInnerText,
  };
}

export default useCartButtonState;
