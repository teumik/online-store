import { useContext } from 'react';
import DataContext from '../../../../../context/data.context';
import './cartButton.scss';
import { CartButtonType } from './types/cartButton.interface';

function CartButton({
  id,
  isActive,
  buttonHandler,
  getInnerText,
  updateCart,
  isInCart,
}: CartButtonType) {
  const activeHandler = isInCart || isActive;
  // const ctx = useContext(DataContext);
  return (
    <button
      id={String(id)}
      className={`item__button purchase__button ${isInCart ? 'purchase__button_active' : ''}`}
      // className={ctx.cart.idArray.includes(id) ? 'active' : ''}
      type="button"
      onClick={(event) => {
        buttonHandler(event, isInCart);
        updateCart();
      }}
      onMouseEnter={buttonHandler}
      onMouseLeave={buttonHandler}
    >
      {getInnerText(isInCart)}
    </button>
  );
}

export default CartButton;
