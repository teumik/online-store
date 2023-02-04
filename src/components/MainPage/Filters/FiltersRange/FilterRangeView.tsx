import './filterRange.scss';

export interface filterRangeViewProps {
  title: string;
  min: number;
  max: number;
  calculateInputValue: (e: { target: HTMLInputElement }) => void;
  lowprice: number;
  maxprice: number;
}

export default function FilterRangeView({
  title,
  min,
  max,
  calculateInputValue,
  lowprice,
  maxprice,
}: filterRangeViewProps) {
  return (
    <div className="filters__item">
      <h3 className="filters__title">{title}</h3>
      <div className="filters__range-values">
        <p>{lowprice}</p>
        -
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
          onChange={calculateInputValue}
        />
        <input
          min={min}
          max={max}
          value={maxprice}
          step={1}
          type="range"
          className="filters__range-2"
          onChange={calculateInputValue}
        />
      </div>
    </div>
  );
}
