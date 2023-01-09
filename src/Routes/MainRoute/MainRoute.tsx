import { useContext } from 'react';
import MainPage from '../../components/MainPage/MainPage';
import Products from '../../container/MainPage/Products/Products';
import Filters from '../../container/MainPage/Filters/Filters';
import Search from '../../container/Search/Search';
import useQueryContext from '../../hooks/useQueryContext';
import QueryContext from '../../context/query.context';
import DataContext from '../../context/data.context';

function MainRoute() {
  const query = useQueryContext();
  const ctx = useContext(DataContext);
  ctx.activeBrandsFilters = [];
  ctx.activeCategoryFilters = [];
  return (
    <QueryContext.Provider value={query}>
      <MainPage className="main-route">
        <div
          className="main-route__filters-wrapper"
        >
          <Search />
          <Filters />
        </div>
        <Products />
      </MainPage>
    </QueryContext.Provider>
  );
}

export default MainRoute;
