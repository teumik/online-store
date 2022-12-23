import FilterRangeView from '../../../../components/MainPage/Filters/FiltersRange/FilterRange';

export interface filterRangeProps {
  title: string;
  min: number;
  max: number;
}

export default function FilterRange({
  title, min, max,
}: filterRangeProps) {
  return (
    <FilterRangeView
      title={title}
      min={min}
      max={max}
    />
  );
}
