import './cartButton.scss';

interface CartButtonType {
  isActive: boolean;
  buttonHandler: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  getInnerText: () => string;
}

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
