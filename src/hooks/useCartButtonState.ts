import { useState } from 'react';
import { dataController } from '../controller/data.controller';

function useCartButtonState() {
  const [{ isActive, isHover }, toggleState] = useState({ isActive: false, isHover: false });
  const ctx = dataController;

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
        const { id } = event.currentTarget;
        ctx.setCartItem(id);
        if (isInCart && !isActive) return;
        toggleState((state) => ({ ...state, isActive: !state.isActive }));
      }
    }
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

  const getCount = (id: number) => ctx.getItemCount(id);

  const increaseItemCount = (idValue: number) => {
    ctx.increaseItemCount(idValue);
  };
  const decreaseItemCount = (idValue: number) => {
    ctx.decreaseItemCount(idValue);
  };

  return {
    isActive,
    isHover,
    buttonHandler,
    getInnerText,
    increaseItemCount,
    decreaseItemCount,
    getCount,
  };
}

export default useCartButtonState;
