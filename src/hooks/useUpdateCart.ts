import { useContext, useState } from 'react';
import DataContext from '../context/data.context';

function useUpdateCart() {
  const ctx = useContext(DataContext);
  const storageCart = JSON.parse(localStorage.getItem('cart') || '[]');

  const [cartState, updateState] = useState(ctx);
  const updateCart = () => {
    localStorage.setItem('cart', JSON.stringify(cartState.cart.idArray));
    const ctxCopy = Object.create(ctx);
    updateState(ctxCopy);
  };

  const init = () => {
    if (cartState.cart.initFlag) {
      Object.assign(cartState.cart.idArray, storageCart);
      Object.assign(cartState.cart, { initFlag: false });
      const ctxCopy = Object.create(ctx);
      updateState(ctxCopy);
    }
  };

  if (storageCart.length !== 0) init();

  return {
    cartState,
    updateCart,
  };
}

export default useUpdateCart;
