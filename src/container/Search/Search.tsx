import { useContext, useEffect } from 'react';
import SearchView from '../../components/Search/Search';
import { dataController } from '../../controller/data.controller';
import ProductsContext from '../../context/products.context';
import useOnce from '../../hooks/useOnce';
import QueryContext from '../../context/query.context';

function Search() {
  const { updateProducts } = useContext(ProductsContext);
  const { searchQuery, updateQuery, updateSearch } = useContext(QueryContext);

  const updateOnce = useOnce(() => {
    if (searchQuery) updateSearch(searchQuery, updateProducts);
  });

  useEffect(() => {
    dataController.storage.filters.search = searchQuery || '';
    updateOnce();
  });

  return (
    <SearchView
      value={searchQuery}
      onChange={(event) => {
        updateQuery(event.target.value);
        updateSearch(event.target.value);
      }}
      onReset={() => {
        updateQuery('');
        updateSearch('');
      }}
    />
  );
}

export default Search;
