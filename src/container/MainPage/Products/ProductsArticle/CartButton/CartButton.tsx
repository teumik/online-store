import { useContext } from 'react';
import CartButtonView from '../../../../../components/MainPage/Products/ProductsArticle/CartButton/CartButton';
import useCartButtonState from '../../../../../hooks/useCartButtonState';
import CartContext from '../../../../../context/cart.context';
import { CartButtonType } from '../../../../../components/MainPage/Products/ProductsArticle/CartButton/types/cartButton.interface';

function CartButton({ id }: Pick<CartButtonType, 'id'>) {
  const {
    isActive,
    buttonHandler,
    getInnerText,
  } = useCartButtonState();
  const { cartState, updateCart } = useContext(CartContext);
  const isInCart = Boolean(cartState.cart.idArray.find((el) => el.id === id));
  const innerText = getInnerText(isInCart);

  return (
    <CartButtonView
      id={id}
      isActive={isActive}
      buttonHandler={buttonHandler}
      innerText={innerText}
      updateCart={updateCart}
      isInCart={isInCart}
    />
  );
}

export default CartButton;
