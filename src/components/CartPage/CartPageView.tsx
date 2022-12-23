import CartList from './CartList/CartListView';
import CartSummary from './CartSummary/CartSummaryView';
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
