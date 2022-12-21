import HeaderView from '../../components/Header/Header';
import Logo from './Logo/Logo';
import Cart, { } from './Cart/Cart';

function Header() {
  const title = 'Online Shop';
  return (
    <HeaderView>
      <Logo title={title} />
      <Cart />
    </HeaderView>
  );
}

export default Header;
