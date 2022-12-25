import { useContext } from 'react';
import ProductsContext from '../../../context/products.context';
import './products.scss';
import { ProductsType } from './types/products.interface';

function Products({
  countDisplayItems,
  buttonsElements,
  buttonsView,
  className,
  children,
}: ProductsType) {
  return (
    <section className="products">

      <ul className="products__header">
        <li className="products__items sorts">
          {buttonsElements}
        </li>
        <li className="products__items">{`Results found: ${countDisplayItems}`}</li>
        <li className="products__items views">
          {buttonsView}
        </li>
      </ul>
      <div className={`products__articles ${className ? 'products__articles_grid' : ''}`}>
        {children}
      </div>
    </section>
  );
}

export default Products;
