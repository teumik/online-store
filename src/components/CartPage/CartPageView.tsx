import CartList from '../../container/CartPage/CartList/CartList';
import CartSummary from '../../container/CartPage/CartSummary/CartSummary';
import './cartPage.scss';

function CartPageView() {
  return (
    <div className="cart-page">
      <CartList />
      <CartSummary />
    </div>
  );
}

export default CartPageView;
