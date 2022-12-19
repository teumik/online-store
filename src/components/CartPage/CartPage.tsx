import CartList from './CartList/CartList';
import CartSummary from './CartSummary/CartSummary';
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
