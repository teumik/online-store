import MainPage from '../../components/MainPage/MainPage';
import Products from '../../container/MainPage/Products/Products';
import Filters from '../../container/MainPage/Filters/Filters';
import Search from '../../container/Search/Search';

function MainRoute() {
  return (
    <MainPage className="main-route">
      <div
        className="main-route__filters-wrapper"
      >
        <Search />
        <Filters />
      </div>
      <Products />
    </MainPage>
  );
}

export default MainRoute;
