import { useContext, useState } from 'react';
import DataContext from '../context/data.context';

function useUpdateProducts() {
  const ctx = useContext(DataContext);
  const [productsState, updateState] = useState(ctx);
  const updateProducts = () => {
    const ctxCopy = Object.create(ctx);
    updateState(ctxCopy);
  };

  return {
    productsState,
    updateProducts,
  };
}

export default useUpdateProducts;
