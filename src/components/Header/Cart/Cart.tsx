import './cart.scss';
import { NavLink } from 'react-router-dom';
import { CartType } from './types/cart.interface';
import CartIcon from './CartIcon';

interface ActiveLinkType {
  isActive: boolean;
}

function Cart({
  totalPrice,
  currency,
  totalDiscount,
  itemsCount,
}: CartType) {
  const active = ({ isActive }: ActiveLinkType) => (isActive ? 'cart__link cart__link_active' : 'cart__link');

  return (
    <div className="cart">
      <span className="cart__total">{`${currency}${totalPrice}`}</span>
      <span className="cart__discount">{`${totalDiscount}`}</span>
      <NavLink
        to="cart"
        className={active}
      >
        <div className="cart__svg">
          <CartIcon />
        </div>
        <span className="cart__count">{itemsCount}</span>
      </NavLink>
    </div>
  );
}

export default Cart;
