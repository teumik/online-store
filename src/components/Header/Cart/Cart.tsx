import './cart.scss';
import { CartType } from './types/cart.interface';

function Cart({
  totalPrice,
  currency,
  totalDiscount,
  itemsCount,
}: CartType) {
  return (
    <div className="cart">
      <span className="cart__total">{`Total price: ${currency}${totalPrice}`}</span>
      <span className="cart__discount">{`Total discount: ${totalDiscount}%`}</span>
      <button className="cart__button" type="button">
        <div className="cart__svg"><span>CART</span></div>
        <span className="cart__count">{itemsCount}</span>
      </button>
    </div>
  );
}

export default Cart;
