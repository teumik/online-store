import './sortButton.scss';
import { SortButtonsType } from './types/sortButton.interface';

function SortButtons({
  content,
  toggleSort,
  mode,
  classes,
  stateValue,
}: SortButtonsType) {
  let svg = null;
  if (stateValue !== null) {
    if (stateValue) {
      svg = (
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M10 5C10 4.44772 10.4477 4 11 4H15C15.5523 4 16 4.44772 16 5C16 5.55228 15.5523 6 15 6H11C10.4477 6 10 5.55228 10 5Z" />
          <path fillRule="evenodd" clipRule="evenodd" d="M10 9C10 8.44772 10.4477 8 11 8H18C18.5523 8 19 8.44772 19 9C19 9.55228 18.5523 10 18 10H11C10.4477 10 10 9.55228 10 9Z" />
          <path fillRule="evenodd" clipRule="evenodd" d="M10 13C10 12.4477 10.4477 12 11 12H21C21.5523 12 22 12.4477 22 13C22 13.5523 21.5523 14 21 14H11C10.4477 14 10 13.5523 10 13Z" />
          <path fillRule="evenodd" clipRule="evenodd" d="M2.29289 16.2929C2.68342 15.9024 3.31658 15.9024 3.70711 16.2929L6 18.5858L8.29289 16.2929C8.68342 15.9024 9.31658 15.9024 9.70711 16.2929C10.0976 16.6834 10.0976 17.3166 9.70711 17.7071L6.70711 20.7071C6.31658 21.0976 5.68342 21.0976 5.29289 20.7071L2.29289 17.7071C1.90237 17.3166 1.90237 16.6834 2.29289 16.2929Z" />
          <path fillRule="evenodd" clipRule="evenodd" d="M6 3C6.55228 3 7 3.44772 7 4V18C7 18.5523 6.55228 19 6 19C5.44772 19 5 18.5523 5 18V4C5 3.44772 5.44772 3 6 3Z" />
        </svg>
      );
    } else {
      svg = (
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M10 5C10 4.44772 10.4477 4 11 4H21C21.5523 4 22 4.44772 22 5C22 5.55228 21.5523 6 21 6H11C10.4477 6 10 5.55228 10 5Z" />
          <path fillRule="evenodd" clipRule="evenodd" d="M10 9C10 8.44772 10.4477 8 11 8H18C18.5523 8 19 8.44772 19 9C19 9.55228 18.5523 10 18 10H11C10.4477 10 10 9.55228 10 9Z" />
          <path fillRule="evenodd" clipRule="evenodd" d="M10 13C10 12.4477 10.4477 12 11 12H15C15.5523 12 16 12.4477 16 13C16 13.5523 15.5523 14 15 14H11C10.4477 14 10 13.5523 10 13Z" />
          <path fillRule="evenodd" clipRule="evenodd" d="M2.29289 16.2929C2.68342 15.9024 3.31658 15.9024 3.70711 16.2929L6 18.5858L8.29289 16.2929C8.68342 15.9024 9.31658 15.9024 9.70711 16.2929C10.0976 16.6834 10.0976 17.3166 9.70711 17.7071L6.70711 20.7071C6.31658 21.0976 5.68342 21.0976 5.29289 20.7071L2.29289 17.7071C1.90237 17.3166 1.90237 16.6834 2.29289 16.2929Z" />
          <path fillRule="evenodd" clipRule="evenodd" d="M6 3C6.55228 3 7 3.44772 7 4V18C7 18.5523 6.55228 19 6 19C5.44772 19 5 18.5523 5 18V4C5 3.44772 5.44772 3 6 3Z" />
        </svg>
      );
    }
  }

  return (
    <button
      className={`products__buttons sorts__types ${classes}`}
      onClick={() => {
        toggleSort(mode);
      }}
      type="button"
    >
      {content}
      {svg}
    </button>
  );
}

export default SortButtons;
