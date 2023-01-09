import FilterRangeView from '../../../../components/MainPage/Filters/FiltersRange/FilterRangeView';
import useRangeValues from '../../../../hooks/useRangeValues';

export interface filterRangeProps {
  title: string;
  min: number;
  max: number;
}

export default function FilterRange({
  title,
  min,
  max,
}: filterRangeProps) {
  const {
    lowprice,
    maxprice,
    calculateInputValue,
  } = useRangeValues(min, max, title);
  return (
    <FilterRangeView
      title={title}
      min={min}
      max={max}
      lowprice={lowprice}
      maxprice={maxprice}
      calculateInputValue={calculateInputValue}
    />
  );
}
