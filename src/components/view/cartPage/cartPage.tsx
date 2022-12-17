import CartList from './cartList/cartList';
import CartSummary from './cartSummary/cartSummary';
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
