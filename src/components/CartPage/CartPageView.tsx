import CartList from '../../container/CartPage/CartList/CartList';
import CartSummary from '../../container/CartPage/CartSummary/CartSummary';
import Modal from '../../container/Modal/Modal';
import './cartPage.scss';

interface CartPageViewProps {
  hasItems: boolean;
}

function CartPageView({ hasItems }: CartPageViewProps) {
  return (
    <div className={hasItems ? 'cart-page' : 'hidden'}>
      <CartList />
      <CartSummary />
      <Modal />
    </div>

  );
}

export default CartPageView;
