import { useContext } from 'react';
import DataContext from '../../../../context/data.context';
import useRangeValues from '../../../../hooks/useRangeValues';
import './filterRange.scss';

export interface filterRangeProps {
  title: string;
  min: number;
  max: number;
}

export default function FilterRangeView({
  title, min, max,
}: filterRangeProps) {
  const {
    lowprice,
    maxprice,
    calculateInputValue,
  } = useRangeValues(min, max, title);
  const ctx = useContext(DataContext);
  return (
    <div className="filters__item">
      <h3 className="filters__title">{title}</h3>
      <div className="filters__range-values">
        <p>{title === 'Price' ? ctx.rangeFilters.Price[0] : ctx.rangeFilters.Stock[0]}</p>
        ?
        <p>{title === 'Price' ? ctx.rangeFilters.Price[1] : ctx.rangeFilters.Stock[1]}</p>
      </div>
      <div className="range__box">
        <input
          min={min}
          max={max}
          value={title === 'Price' ? ctx.rangeFilters.Price[0] : ctx.rangeFilters.Stock[0]}
          step={1}
          type="range"
          className="filters__range-1"
          onChange={calculateInputValue}
        />
        <input
          min={min}
          max={max}
          value={title === 'Price' ? ctx.rangeFilters.Price[1] : ctx.rangeFilters.Stock[1]}
          step={1}
          type="range"
          className="filters__range-2"
          onChange={calculateInputValue}
        />
      </div>
    </div>
  );
}
