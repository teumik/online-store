import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { dataController } from '../controller/data.controller';

function useViewButton() {
  const [queryParams, setQueryParams] = useSearchParams();
  const view = queryParams.get('view') !== 'list' && queryParams.get('view') !== null;
  const [viewState, setView] = useState(view);
  dataController.storage.products.layout = view;

  function toggleView() {
    if (viewState) {
      queryParams.set('view', 'list');
    } else {
      queryParams.set('view', 'grid');
    }
    dataController.storage.products.layout = !viewState;
    setQueryParams(queryParams);
    setView(!viewState);
  }

  return {
    viewState,
    toggleView,
  };
}

export default useViewButton;
