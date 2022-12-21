import './cartButton.scss';
import { CartButtonType } from './types/cartButton.interface';

function CartButton({
  id,
  isActive,
  buttonHandler,
  getInnerText,
  updateCart,
}: CartButtonType) {
  return (
    <button
      id={String(id)}
      className={`item__button purchase__button ${isActive ? 'purchase__button_active' : ''}`}
      type="button"
      onClick={(event) => {
        buttonHandler(event);
        updateCart();
      }}
      onMouseEnter={buttonHandler}
      onMouseLeave={buttonHandler}
    >
      {getInnerText()}
    </button>
  );
}

export default CartButton;
