import { useContext } from 'react';
import ProductsContext from '../../../context/products.context';
import './products.scss';
import { ProductsProp } from './types/products.interface';

function Products({
  countDisplayItems,
  buttonsElements,
  articles,
}: ProductsProp) {
  const { updateProducts } = useContext(ProductsContext);
  return (
    <section className="products">

      <ul className="products__header">
        <li className="products__items sorts">
          {buttonsElements}
        </li>
        <li className="products__items">{`Results found: ${countDisplayItems}`}</li>
        <li className="products__items">
          <button className="products__buttons" type="button">B</button>
          <button className="products__buttons" type="button">L</button>
        </li>
      </ul>
      <div>
        {articles}
      </div>
    </section>
  );
}

export default Products;
