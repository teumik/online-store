import './button.scss';
import { useState } from 'react';
import { SortButtonsType } from './types/button.interface';

function SortButtons({ content }: SortButtonsType) {
  const [isActive, toggle] = useState(true);

  const reverseSort = () => {
    toggle((state) => !state);
  };

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
