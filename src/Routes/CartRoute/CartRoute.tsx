import MainPage from '../../components/MainPage/MainPage';
import CartPage from '../../container/CartPage/CartPage';
import BackButton from '../../container/BackButton/BackButton';

function CartRoute() {
  return (
    <MainPage className="cart-route">
      <BackButton />
      <CartPage />
    </MainPage>
  );
}

export default CartRoute;
