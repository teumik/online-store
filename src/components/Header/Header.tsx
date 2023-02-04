import './header.scss';
import Cart from './Cart/Cart';
import Logo from './Logo/Logo';
import { HeaderType } from './types/header.interface';

function Header(
  {
    totalPrice,
    currency,
    totalDiscount,
    itemsCount,
    title,
    onClick,
  }: HeaderType
) {
  return (
    <header className="header">
      <ul className="header__list">
        <li className="header__items">
          <Logo
            title={title}
            onClick={onClick}
          />
        </li>
        <li className="header__items">
          <Cart
            totalPrice={totalPrice}
            currency={currency}
            totalDiscount={totalDiscount}
            itemsCount={itemsCount}
          />
        </li>
      </ul>
    </header>
  );
}

export default Header;
