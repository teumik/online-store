import './logo.scss';
import { NavLink } from 'react-router-dom';
import { LogoType } from './types/logo.interface';

interface ActiveLinkType {
  isActive: boolean;
}

function Logo({ onClick }: LogoType) {
  const active = ({ isActive }: ActiveLinkType) => (isActive ? 'logo__link logo__link_active' : 'logo__link');
  return (
    <div className="logo">
      <NavLink
        to="/"
        className={active}
        onClick={onClick}
      >
        <div className="logo__header">
          <span className="logo__header_color">e</span>
          <span className="logo__header_color">b</span>
          <span className="logo__header_color">a</span>
          <span className="logo__header_color">y</span>
        </div>
      </NavLink>
    </div>
  );
}
export default Logo;
