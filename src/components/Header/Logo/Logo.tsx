import './logo.scss';
import { NavLink } from 'react-router-dom';
import { LogoType } from './types/logo.interface';

interface ActiveLinkType {
  isActive: boolean;
}

function Logo({ title }: LogoType) {
  const active = ({ isActive }: ActiveLinkType) => (isActive ? 'logo__link logo__link_active' : 'logo__link');
  return (
    <div className="logo">
      <NavLink
        to="/"
        className={active}
      >
        <div className="logo__svg"><span>LOGO</span></div>
        <h1 className="logo__header">{title}</h1>
      </NavLink>
    </div>
  );
}
export default Logo;
