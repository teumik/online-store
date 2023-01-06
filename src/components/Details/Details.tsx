import './details.scss';
import BackButton from '../../container/BackButton/BackButton';
import { DetailsType } from './types/details.interface';

function Details({ links, children }: DetailsType) {
  return (
    <div className="details">
      <BackButton />
      <div className="details__path">
        {links}
      </div>
      {children}
    </div>
  );
}

export default Details;
