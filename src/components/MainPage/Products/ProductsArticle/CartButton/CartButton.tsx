import './cartButton.scss';
import { CartButtonType } from './types/cartButton.interface';

function CartButton({
  id,
  isActive,
  buttonHandler,
  updateCart,
  isInCart,
  innerText,
}: CartButtonType) {
  const activeHandler = isInCart || isActive;
  return (
    <button
      id={String(id)}
      className={`item__button purchase__button ${isInCart ? 'purchase__button_active' : ''}`}
      type="button"
      onClick={(event) => {
        buttonHandler(event, activeHandler);
        updateCart();
      }}
      onMouseEnter={buttonHandler}
      onMouseLeave={buttonHandler}
    >
      {innerText}
    </button>
  );
}

export default CartButton;
