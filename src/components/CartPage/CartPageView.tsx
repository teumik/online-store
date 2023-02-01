import CartList from '../../container/CartPage/CartList/CartList';
import CartSummary from '../../container/CartPage/CartSummary/CartSummary';
import Modal from '../../container/Modal/Modal';
import './cartPage.scss';

interface CartPageViewProps {
  hasItems: boolean;
}

function CartPageView({ hasItems }: CartPageViewProps) {
  return (
    hasItems ? (
      <div className="cart-page">
        <CartList />
        <CartSummary />
        <Modal />
      </div>
    )
      : (<h1>Cart is empty</h1>)
  );
}

export default CartPageView;
