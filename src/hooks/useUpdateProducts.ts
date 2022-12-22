import { ReactNode, useContext, useState } from 'react';
import DataContext from '../context/data.context';

function useUpdateProducts() {
  const ctx = useContext(DataContext);
  const [productsState, updateState] = useState(ctx.view);
  const updateProducts = () => {
    const ctxCopy = Object.create(ctx.view);
    console.log(ctx.view);
    updateState(ctxCopy);
  };

  return {
    productsState,
    updateProducts,
  };
}

export default useUpdateProducts;
