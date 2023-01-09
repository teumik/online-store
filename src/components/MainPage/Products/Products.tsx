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
        <li className="products__items">{`Found: ${countDisplayItems}`}</li>
        <li className="products__items views">
          {buttonsView}
        </li>
      </ul>
      {countDisplayItems < 1 ? (
        <div
          className="products__matchless"
        >
          <div>
            No Results Matching Your Request
          </div>
          <div>
            Try Again
          </div>
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
