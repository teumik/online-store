import './cartButton.scss';
import { useState } from 'react';

function CartButton() {
  const [isActive, toggleBuyState] = useState(false);
  const [isHover, toggleHoverState] = useState(false);

  const addToCart = () => {
    toggleBuyState((state) => !state);
  };
  const removeFromCart = () => {
    toggleHoverState((state) => !state);
  };
  const getInnerText = () => {
    if (isActive) {
      if (isHover && isActive) return 'Remove from cart';
      return 'In the cart';
    }
    return 'Add to cart';
  };

  return (
    <button
      className={`item__button purchase__button ${isActive ? 'purchase__button_active' : ''}`}
      type="button"
      onClick={addToCart}
      onMouseEnter={removeFromCart}
      onMouseLeave={removeFromCart}
    >
      {getInnerText()}
    </button>
  );
}

export default CartButton;
