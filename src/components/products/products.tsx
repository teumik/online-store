/* eslint-disable react/no-array-index-key */
import './products.scss';
import SortButtons from './button/button';
import ProductsArticle from './productsArticle/productsArticle';

function Products() {
  const countDisplayItems = 100;
  const buttonsContent = ['Price', 'Discount'];

  return (
    <section className="products">
      <ul className="products__header">
        <li className="products__items sorts">
          {
            buttonsContent.map((el) => (
              <SortButtons
                key={el.toLowerCase()}
                content={el}
              />
            ))
          }
        </li>
        <li className="products__items">{`Results found: ${countDisplayItems}`}</li>
        <li className="products__items">
          <button className="products__buttons" type="button">B</button>
          <button className="products__buttons" type="button">L</button>
        </li>
      </ul>
      <div>
        {
          Array(20).fill(0).map((el, i) => (
            <ProductsArticle
              key={i}
            />
          ))
        }
      </div>
    </section>
  );
}

export default Products;
