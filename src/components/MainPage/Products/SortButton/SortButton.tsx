import './sortButton.scss';
import { SortButtonsType } from './types/sortButton.interface';

function SortButtons({ content, isActive, reverseSort }: SortButtonsType) {
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
