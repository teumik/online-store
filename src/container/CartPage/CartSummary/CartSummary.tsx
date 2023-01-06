import { useContext } from 'react';
import CartSummaryView from '../../../components/CartPage/CartSummary/CartSummaryView';
import DataContext from '../../../context/data.context';
import BuyButton from '../../../components/MainPage/Products/ProductsArticle/Article/BuyNowButton/BuyNowButton';
import ModalContext from '../../../context/modal.context';

function Modal() {
  return (
    <div>MODAL</div>
  );
}

function CartSummary() {
  const ctx = useContext(DataContext);
  const totalPrice = ctx.cartTotalPrice;
  const totalProducts = ctx.cartItemsCount;
  const { isOpen, toggleOpen } = useContext(ModalContext);

  return (
    <>
      {isOpen ? <Modal /> : null}
      <CartSummaryView
        totalProducts={totalProducts}
        totalPrice={totalPrice}
      >
        <BuyButton
          click={toggleOpen}
        />
      </CartSummaryView>
    </>
  );
}

export default CartSummary;
