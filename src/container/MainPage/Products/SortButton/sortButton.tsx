import SortButtonsView from '../../../../components/MainPage/Products/SortButton/SortButton';
import { SortButtonsType } from '../../../../components/MainPage/Products/SortButton/types/sortButton.interface';
import useClassRemove from '../../../../hooks/useClassRemove';

function SortButtons({
  content, isActive, reverseSort,
}: SortButtonsType) {
  const { hasClass, toggleClassState } = useClassRemove('sorts__types_increase', 'sorts__types_decrease');

  return (
    <SortButtonsView
      content={content}
      isActive={isActive}
      reverseSort={reverseSort}
      toggleClassState={toggleClassState}
      isSort={hasClass}
    />
  );
}

export default SortButtons;
