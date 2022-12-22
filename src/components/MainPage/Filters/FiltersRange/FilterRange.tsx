import { useContext, useState } from 'react';
import DataContext from '../../../../context/data.context';
import { filterRangeProps } from '../../../../types/types';
import './filterRange.scss';

function FilterRangeView({
  title, min, max,
}: filterRangeProps) {
  const ctx = useContext(DataContext);
  const [lowprice, setLowPrice] = useState(min);
  const [maxprice, setMaxPrice] = useState(max);

  function rangeControl(e: { target: HTMLInputElement }): void {
    const { target } = e;
    const value: number = parseInt(target.value, 10);
    if (target.classList.contains('filters__range-1')) {
      if (value > maxprice) return;
      setLowPrice(value);
    }
    if (target.classList.contains('filters__range-2')) {
      if (value < lowprice) return;
      setMaxPrice(value);
    }

    ctx.onChangeFiltersRange(title, [lowprice, maxprice]);
  }
  return (
    <div className="filters__item">
      <h3 className="filters__title">{title}</h3>
      <div className="filters__range-values">
        <p>{lowprice}</p>
        ?
        <p>{maxprice}</p>
      </div>
      <div className="range__box">
        <input
          min={min}
          max={max}
          value={lowprice}
          step={1}
          type="range"
          className="filters__range-1"
          onChange={rangeControl}
        />
        <input
          min={min}
          max={max}
          value={maxprice}
          step={1}
          type="range"
          className="filters__range-2"
          onChange={rangeControl}
        />
      </div>
    </div>
  );
}

export default FilterRangeView;
