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
    lowRangeValue,
    maxRangeValue,
    calculateInputValue,
  } = useRangeValues(min, max, title);

  return (
    <div className="filters__item">
      <h3 className="filters__title">{title}</h3>
      <div className="filters__range-values">
        <p>{lowRangeValue}</p>
        ?
        <p>{maxRangeValue}</p>
      </div>
      <div className="range__box">
        <input
          min={min}
          max={max}
          value={lowRangeValue}
          step={1}
          type="range"
          className="filters__range-1"
          onInput={(e) => calculateInputValue(e)}
          onChange={calculateInputValue}
        />
        <input
          min={min}
          max={max}
          value={maxRangeValue}
          step={1}
          type="range"
          className="filters__range-2"
          onInput={(e) => calculateInputValue(e)}
          onChange={calculateInputValue}
        />
      </div>
    </div>
  );
}
