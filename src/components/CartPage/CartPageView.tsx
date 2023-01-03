import CartList from '../../container/CartPage/CartList/CartList';
import CartSummary from '../../container/CartPage/CartSummary/CartSummary';
import Modal from '../../container/Modal/Modal';
import './cartPage.scss';

interface CartPageViewProps {
  hasItems: boolean;
}

function CartPageView({ hasItems }: CartPageViewProps) {
  return (
    <>
      <h1 className={hasItems ? 'hidden' : 'cart-page__title'}>Cart is empty</h1>
      <div className={hasItems ? 'cart-page' : 'hidden'}>
        <CartList />
        <CartSummary />
        <Modal />
      </div>
    </>

  );
}

export default CartPageView;
