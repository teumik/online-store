import { useState } from 'react';
import { dataController } from '../controller/data.controller';

function useViewButton() {
  const { layout } = dataController.storage.products;
  const [viewState, setView] = useState(layout);

  function toggleView() {
    dataController.storage.products.layout = !layout;
    setView((state) => !state);
  }

  return {
    viewState,
    toggleView,
  };
}

export default useViewButton;
