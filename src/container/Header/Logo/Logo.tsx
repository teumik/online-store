import LogoView from '../../../components/Header/Logo/Logo';
import { LogoType } from '../../../components/Header/Logo/types/logo.interface';

function Logo(props: LogoType) {
  const { title } = props;
  return (
    <LogoView title={title} />
  );
}

export default Logo;
