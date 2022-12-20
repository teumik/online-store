import './cartButton.scss';
import { CartButtonType } from './types/cartButton.interface';

function CartButton({
  isActive,
  buttonHandler,
  getInnerText,
}: CartButtonType) {
  return (
    <button
      className={`item__button purchase__button ${isActive ? 'purchase__button_active' : ''}`}
      type="button"
      onClick={buttonHandler}
      onMouseEnter={buttonHandler}
      onMouseLeave={buttonHandler}
    >
      {getInnerText()}
    </button>
  );
}

export default CartButton;
