import { useContext } from 'react';
import CartButtonView from '../../../../../components/MainPage/Products/ProductsArticle/CartButton/CartButton';
import useCartButtonState from '../../../../../hooks/useCartButtonState';
import CartContext from '../../../../../context/cart.context';

interface CartButtonType {
  id: number;
}

function CartButton({ id }: CartButtonType) {
  const {
    isActive,
    buttonHandler,
    getInnerText,
  } = useCartButtonState();
  const { updateCart } = useContext(CartContext);

  return (
    <CartButtonView
      id={id}
      isActive={isActive}
      buttonHandler={buttonHandler}
      getInnerText={getInnerText}
      updateCart={updateCart}
    />
  );
}

export default CartButton;
