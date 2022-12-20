import SortButtonsView from '../../../../components/MainPage/Products/SortButton/SortButton';
import { SortButtonsType } from '../../../../components/MainPage/Products/SortButton/types/sortButton.interface';

function SortButtons({ content, isActive, reverseSort }: SortButtonsType) {
  return (
    <SortButtonsView
      content={content}
      isActive={isActive}
      reverseSort={reverseSort}
    />
  );
}

export default SortButtons;
