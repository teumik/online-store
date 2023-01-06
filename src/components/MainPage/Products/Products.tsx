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
      {countDisplayItems < 1 ? (
        <div
          className="products__matchless"
        >
          No Results Matching Your Request
        </div>
      ) : (
        <div className={`products__articles ${className ? 'products__articles_grid' : ''}`}>
          {children}
        </div>
      )}
    </section>
  );
}

export default Products;
