import './details.scss';
import BackButton from '../BackButton/BackButton';
import { DetailsType } from './types/details.interface';

function Details({ navigate, links, children }: DetailsType) {
  return (
    <div className="details">
      <BackButton preventNavigate={navigate} />
      <div className="details__path">
        {links}
      </div>
      {children}
    </div>
  );
}

export default Details;
