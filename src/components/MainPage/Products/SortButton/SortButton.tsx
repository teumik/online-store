import { AcsSortIcon, DescSortIcon } from './SortIcons';
import './sortButton.scss';
import { SortButtonsType } from './types/sortButton.interface';
// DescSortIcon, AcsSortIcon

function SortButtons({
  content,
  toggleSort,
  mode,
  classes,
  stateValue,
}: SortButtonsType) {
  let svg = null;
  if (stateValue !== null) {
    svg = stateValue ? <DescSortIcon /> : <AcsSortIcon />;
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
