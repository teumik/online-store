import CartList from './CartList/CartList';
import CartSummary from './CartSummary/CartSummary';
import './cartPage.scss';

function CartPageView() {
  return (
    <div className="cart">
      <CartList />
      <CartSummary />
    </div>
  );
}

export default CartPageView;
