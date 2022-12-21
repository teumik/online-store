import { useContext, useState } from 'react';
import DataContext from '../context/data.context';

function useUpdateCart() {
  const ctx = useContext(DataContext);
  const [cartState, updateState] = useState(ctx);
  const updateCart = () => {
    const ctxCopy = Object.create(ctx);
    updateState(ctxCopy);
  };

  return {
    cartState,
    updateCart,
  };
}

export default useUpdateCart;
