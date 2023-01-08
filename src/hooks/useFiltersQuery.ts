import { useContext, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import DataContext from '../context/data.context';

function useFilterQuery(filterTitle: string) {
  const [searchParams, setSearchParams] = useSearchParams();
  const initial = searchParams.get(filterTitle.toLowerCase())?.split('↕') || [];
  const ctx = useContext(DataContext);
  const [values, setValues] = useState(initial);

  ctx.filterAllProducts();

  if (filterTitle === 'Category') {
    ctx.activeCategoryFilters = [...initial];
  }

  if (filterTitle === 'Brand') {
    ctx.activeBrandsFilters = [...initial];
  }

  const changeFiltersQuery = (title: string) => {
    let allValues = [...values];
    if (allValues.includes(title)) {
      allValues = allValues.filter((item) => item !== title);
      setValues(allValues);
    } else {
      allValues = [...allValues, title];
      setValues(allValues);
    }
    if (allValues.length !== 0) {
      searchParams.set(filterTitle.toLowerCase(), allValues.join('↕'));
      setSearchParams(searchParams);
    } else {
      searchParams.delete(filterTitle.toLowerCase());
      setSearchParams(searchParams);
    }
  };

  return {
    changeFiltersQuery,
    initial,
  };
}

export default useFilterQuery;
