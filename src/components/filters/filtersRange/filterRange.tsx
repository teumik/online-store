import { useState } from 'react';
import './filterRange.scss';

interface filterRangeProps {
  title: string;
  min: number;
  max: number;
}

function FilterRange(props: filterRangeProps) {
  const { title, min, max } = props;

  const [lowprice, setLowprice] = useState(min);
  const [maxprice, setMaxprice] = useState(max);

  function rangeControl(e: { target: HTMLInputElement }): void {
    const { target } = e;
    const value: number = parseInt(target.value, 10);
    if (target.classList.contains('filters__range-1')) {
      if (value > maxprice) return;
      setLowprice(value);
    }
    if (target.classList.contains('filters__range-2')) {
      if (value < lowprice) return;
      setMaxprice(value);
    }
  }

  return (
    <div className="filters__item">
      <h3 className="filters__title">{title}</h3>
      <div className="filters__range-values">
        <p>{lowprice}</p>
        ⟷
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

export default FilterRange;
