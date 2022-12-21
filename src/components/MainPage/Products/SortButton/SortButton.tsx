import './sortButton.scss';
import { SortButtonsType } from './types/sortButton.interface';

function SortButtons({
  content, isActive, reverseSort, toggleClassState, isSort,
}: Required<SortButtonsType>) {
  const classProp = isSort ? `sorts__types${isActive ? '_increase' : '_decrease'}` : '';
  return (
    <button
      className={`products__buttons sorts__types ${classProp}`}
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
