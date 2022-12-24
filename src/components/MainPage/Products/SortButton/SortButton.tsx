import './sortButton.scss';
import { SortButtonsType } from './types/sortButton.interface';

function SortButtons({
  content, isActive, reverseSort, toggleClassState, isSort,
}: Required<SortButtonsType>) {
  const className = isSort ? `sorts__types${isActive ? '_increase' : '_decrease'}` : '';
  return (
    <button
      className={`products__buttons sorts__types ${className}`}
      onClick={(event) => {
        reverseSort();
        toggleClassState(event);
      }}
      type="button"
    >
      {content}
    </button>
  );
}

export default SortButtons;
