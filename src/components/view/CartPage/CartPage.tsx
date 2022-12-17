import CartList from './CartList/CartList';
import CartSummary from './CartSummary/cartSummary';
import './cartPage.scss';

function CartPage() {
  return (
    <div className="cart">
      <CartList />
      <CartSummary />
    </div>
  );
}

export default CartPage;
