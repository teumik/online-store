import { useContext, useState } from 'react';
import DataContext from '../context/data.context';

function useUpdateCart() {
  const ctx = useContext(DataContext);
  const storageCart = JSON.parse(localStorage.getItem('cart') || '[]');
  Object.assign(ctx.cart.idArray, storageCart);

  const [cartState, updateState] = useState(ctx);
  const updateCart = () => {
    localStorage.setItem('cart', JSON.stringify(cartState.cart.idArray));
    const ctxCopy = Object.create(ctx);
    updateState(ctxCopy);
  };

  return {
    cartState,
    updateCart,
  };
}

export default useUpdateCart;
