import { BuyButtonType } from './types/buyNowButton.interface';

function BuyButton({ click }: BuyButtonType) {
  return (
    <button
      className="purchase__button"
      type="button"
      onClick={click}
    >
      Buy Now
    </button>
  );
}

export default BuyButton;
