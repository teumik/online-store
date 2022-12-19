import './header.scss';
import Cart from './Cart/Cart';
import Logo from './Logo/Logo';

function Header() {
  const totalPrice = 1000;
  const currency = '$';
  const itemsCount = 3;
  const totalDiscount = 2;

  return (
    <header className="header">
      <ul className="header__list">
        <li className="header__items">
          <Logo />
        </li>
        <li className="header__items">
          <Cart
            currency={currency}
            totalPrice={totalPrice}
            totalDiscount={totalDiscount}
            itemsCount={itemsCount}
          />
        </li>
      </ul>
    </header>
  );
}

export default Header;
