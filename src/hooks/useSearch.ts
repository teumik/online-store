import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { dataController } from '../controller/data.controller';

function useSearch() {
  const [queryParams, setQueryParams] = useSearchParams();
  const init = queryParams.get('search');
  const [searchQuery, setSearchQuery] = useState(init || '');

  const updateQuery = (value: string) => {
    if (value === '') {
      queryParams.delete('search');
    } else {
      queryParams.set('search', value);
    }
    setQueryParams(queryParams);
    setSearchQuery(value);
  };

  const updateSearch = (value: string, callback?: () => void) => {
    dataController.search(value);
    if (callback) callback();
  };

  return {
    searchQuery,
    updateQuery,
    updateSearch,
  };
}

export default useSearch;
