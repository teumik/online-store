import MainPage from '../../components/MainPage/MainPage';
import CartPageView from '../../components/CartPage/CartPageView';
import BackButton from '../../container/BackButton/BackButton';

function CartRoute() {
  return (
    <MainPage className="cart-route">
      <BackButton />
      <CartPageView />
    </MainPage>
  );
}

export default CartRoute;
