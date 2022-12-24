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
  return (
    <button
      id={String(id)}
      className={`item__button purchase__button ${activeHandler ? 'purchase__button_active' : ''}`}
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
