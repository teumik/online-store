// import FilterRangeView from '../../../../components/MainPage/Filters/FiltersRange/FilterRange';

// import { filterRangeProps } from '../../../../types/types';

// function FilterRange(props: filterRangeProps) {
//   const { title, min, max } = props;

//   const [lowprice, setLowPrice] = useState(min);
//   const [maxprice, setMaxPrice] = useState(max);

//   function rangeControl(e: { target: HTMLInputElement }): void {
//     const { target } = e;
//     const value: number = parseInt(target.value, 10);
//     if (target.classList.contains('filters__range-1')) {
//       if (value > maxprice) return;
//       setLowPrice(value);
//     }
//     if (target.classList.contains('filters__range-2')) {
//       if (value < lowprice) return;
//       setMaxPrice(value);
//     }
//   }

//   return (
//     <FilterRangeView
//       title={title}
//       min={0}
//       max={0}
//       lowprice={lowprice}
//       maxprice={maxprice}
//     />
//   );
// }

// export default FilterRange;

export default {};
