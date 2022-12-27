import { useContext, useState } from 'react';
import DataContext from '../context/data.context';

function useCartButtonState() {
  const [{ isActive, isHover }, toggleState] = useState({ isActive: false, isHover: false });
  const ctx = useContext(DataContext);

  const buttonHandler = (
    event?: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    isInCart?: boolean
  ) => {
    if (event) {
      if (event.type === 'mouseenter' || event.type === 'mouseleave') {
        toggleState((state) => ({ ...state, isHover: !state.isHover }));
        return;
      }
      if (event.type === 'click') {
        if (isInCart && !isActive) {
          ctx.setCartItem(event.currentTarget.id);
          return;
        }
        ctx.setCartItem(event.currentTarget.id);
        toggleState((state) => ({ ...state, isActive: !state.isActive }));
      }
    }
    // toggleState((state) => ({ ...state, isActive: !state.isActive }));
  };

  const getInnerText = (isInCart: boolean) => {
    if (isActive && !isInCart) {
      return 'Add';
    }

    if (isActive || isInCart) {
      if (isHover && isActive) return 'Remove';
      if (isHover && isInCart) return 'Remove';
      return 'Added';
    }
    return 'Add';
  };

  return {
    isActive,
    isHover,
    buttonHandler,
    getInnerText,
  };
}

export default useCartButtonState;
