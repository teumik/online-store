import MainPage from '../../components/MainPage/MainPage';
import Products from '../../container/MainPage/Products/Products';
import Filters from '../../container/MainPage/Filters/Filters';

function MainRoute() {
  return (
    <MainPage className="main-route">
      <Filters />
      <Products />
    </MainPage>
  );
}

export default MainRoute;
