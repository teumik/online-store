import './cart.scss';
import { CartProps } from './types/cart.interface';

function Cart({
  totalPrice, currency, totalDiscount, itemsCount,
}: CartProps): JSX.Element {
  return (
    <div className="cart">
      <span className="cart__total">{`Total price: ${currency}${totalPrice}`}</span>
      <span className="cart__discount">{`Total discount: ${totalDiscount}%`}</span>
      <a className="cart__link" href="./">
        <div className="cart__svg">CART</div>
        <span className="cart__count">{itemsCount}</span>
      </a>
    </div>
  );
}

export default Cart;
