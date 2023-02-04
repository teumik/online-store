import { useState } from 'react';
import { dataController } from '../controller/data.controller';

function useUpdateProducts() {
  const [productsState, updateState] = useState(dataController);
  const updateProducts = () => {
    const ctx = Object.create(dataController);
    updateState(ctx);
  };

  return {
    productsState,
    updateProducts,
  };
}

export default useUpdateProducts;
