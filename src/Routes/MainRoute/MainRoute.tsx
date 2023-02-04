import MainPage from '../../components/MainPage/MainPage';
import Products from '../../container/MainPage/Products/Products';
import Filters from '../../container/MainPage/Filters/Filters';
import Search from '../../container/Search/Search';
import useQueryContext from '../../hooks/useQueryContext';
import QueryContext from '../../context/query.context';

function MainRoute() {
  const query = useQueryContext();
  return (
    <MainPage className="main-route">
      <QueryContext.Provider value={query}>
        <div
          className="main-route__filters-wrapper"
        >
          <Search />
          <Filters />
        </div>
        <Products />
      </QueryContext.Provider>
    </MainPage>
  );
}

export default MainRoute;
