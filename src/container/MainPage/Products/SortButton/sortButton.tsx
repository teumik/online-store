import SortButtonsView from '../../../../components/MainPage/Products/SortButton/SortButton';
import { SortButtonsType } from '../../../../components/MainPage/Products/SortButton/types/sortButton.interface';

function SortButtons({
  content, toggleSort, classState, mode,
}: SortButtonsType) {
  const stateValue = classState(mode);
  let className;
  if (stateValue !== null) {
    className = stateValue ? 'sorts__types_increase' : 'sorts__types_decrease';
  }

  return (
    <SortButtonsView
      content={content}
      toggleSort={toggleSort}
      classState={classState}
      mode={mode}
      classes={className}
    />
  );
}

export default SortButtons;
