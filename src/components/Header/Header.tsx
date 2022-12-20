import './header.scss';
import { HeaderProps } from './types/header.interface';

function Header({ children = null }: HeaderProps) {
  let key = 0;
  const listItems = Array.isArray(children) ? children?.map((node) => {
    key += 1;
    return (
      <li key={key} className="header__items">
        {node}
      </li>
    );
  }) : children;

  return (
    <header className="header">
      <ul className="header__list">
        {listItems}
      </ul>
    </header>
  );
}

export default Header;
