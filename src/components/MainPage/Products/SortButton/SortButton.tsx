import './sortButton.scss';
import { SortButtonsType } from './types/sortButton.interface';

function SortButtons({
  content, toggleSort, mode, classes,
}: SortButtonsType) {
  return (
    <button
      className={`products__buttons sorts__types ${classes}`}
      onClick={() => {
        toggleSort(mode);
      }}
      type="button"
    >
      {content}
    </button>
  );
}

export default SortButtons;
