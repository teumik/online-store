import './filtersList.scss';
import { useContext } from 'react';
import { filterListProps } from '../../../../types/types';
import DataContext from '../../../../context/data.context';
import useUpdateProducts from '../../../../hooks/useUpdateProducts';
// import useUpdateProducts from '../../../../hooks/useUpdateProducts';

function FiltersListView({ filterTitle, values }: filterListProps) {
  const ctx = useContext(DataContext);
  const { updateProducts } = useUpdateProducts();
  const changeHandler = (title: string) => {
    ctx.onChangeFiltersList(title);
    // console.log(ctx.view);
    updateProducts();
  };
  return (
    <div className="filters__item">
      <h3 className="filters__title">{filterTitle}</h3>
      <div className="filters__list">
        {values.map((title) => (
          <li className="filters__list-item" key={title}>
            <input onChange={() => changeHandler(title)} type="checkbox" className="filters__list-checkbox" id={title} />
            <label htmlFor={title} className="filters__list-label">{` ${title} `}</label>
            <p className="filters__list-stock">
              5/$
              {/* {ctx.maxLength(title)} */}
            </p>
          </li>
        ))}
      </div>
    </div>
  );
}

export default FiltersListView;
