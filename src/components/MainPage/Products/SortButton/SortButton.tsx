import './sortButton.scss';
// import { useState } from 'react';
import { SortButtonsType } from './types/sortButton.interface';

function SortButtons({ content, isActive, reverseSort }: SortButtonsType) {
  // const [isActive, toggleSortState] = useState(true);
  // const reverseSort = () => {
  //   toggleSortState((state) => !state);
  // };

  return (
    <button
      className={`products__buttons sorts__types sorts__types${isActive ? '_increase' : '_decrease'}`}
      onClick={reverseSort}
      type="button"
    >
      {content}
    </button>
  );
}

export default SortButtons;
