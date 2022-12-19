import './logo.scss';
import { LogoType } from './types/logo.interface';

function Logo(props: LogoType) {
  const { title } = props;
  return (
    <div className="logo">
      <a className="logo__link" href="https://www.google.com/" target="_blank" rel="noreferrer">
        <div className="logo__svg"><span>LOGO</span></div>
        <h1 className="logo__header">{title}</h1>
      </a>
    </div>
  );
}
export default Logo;
