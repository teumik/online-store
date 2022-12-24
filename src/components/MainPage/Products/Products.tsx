import './products.scss';
import { ProductsType } from './types/products.interface';

function Products({
  countDisplayItems,
  buttonsElements,
  children,
}: ProductsType) {
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
        {children}
      </div>
    </section>
  );
}

export default Products;
