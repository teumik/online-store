import { useContext, useState } from 'react';
import DataContext from '../context/data.context';

function useCartButtonState() {
  const [{ isActive, isHover }, toggleState] = useState({ isActive: false, isHover: false });
  const ctx = useContext(DataContext);

  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (event.type === 'mouseenter' || event.type === 'mouseleave') {
      toggleState((state) => ({ ...state, isHover: !state.isHover }));
    }
    if (event.type === 'click') {
      ctx.setCartItem(event.currentTarget.id);
      toggleState((state) => ({ ...state, isActive: !state.isActive }));
    }
  };

  const getInnerText = () => {
    if (isActive) {
      if (isHover && isActive) return 'Remove';
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
