import HeaderView from '../../components/Header/Header';
import Logo from './Logo/Logo';
import Cart from './Cart/Cart';

function Header() {
  const totalPrice = 1000;
  const currency = '$';
  const itemsCount = 3;
  const totalDiscount = 2;
  const title = 'Online Shop';

  return (
    <HeaderView>
      <Logo title={title} />
      <Cart
        currency={currency}
        totalPrice={totalPrice}
        totalDiscount={totalDiscount}
        itemsCount={itemsCount}
      />
    </HeaderView>
  );
}

export default Header;
