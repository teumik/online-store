import CartButtonView from '../../../../../components/MainPage/Products/ProductsArticle/CartButton/CartButton';
import useCartButtonState from '../../../../../hooks/useCartButtonState';

function CartButton() {
  const {
    isActive,
    buttonHandler,
    getInnerText,
  } = useCartButtonState();

  return (
    <CartButtonView
      isActive={isActive}
      buttonHandler={buttonHandler}
      getInnerText={getInnerText}
    />
  );
}

export default CartButton;
