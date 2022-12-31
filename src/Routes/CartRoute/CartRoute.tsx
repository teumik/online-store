import { Link } from 'react-router-dom';
import MainPage from '../../components/MainPage/MainPage';
import BackButton from '../../components/BackButton/BackButton';
import CartPageView from '../../components/CartPage/CartPageView';

function CartRoute() {
  return (
    <MainPage className="cart-route">
      <Link to="/">
        <BackButton preventNavigate />
      </Link>
      <CartPageView />
    </MainPage>
  );
}

export default CartRoute;
