import { Link } from 'react-router-dom';
import MainPage from '../../components/MainPage/MainPage';
import BackButton from '../../components/BackButton/BackButton';
import CartPage from '../../container/CartPage/CartPage';

function CartRoute() {
  return (
    <MainPage className="cart-route">
      <Link to="/">
        <BackButton preventNavigate />
      </Link>
      <CartPage />
    </MainPage>
  );
}

export default CartRoute;
