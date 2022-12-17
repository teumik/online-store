import './products.scss';
import SortButtons from './sortButton/sortButton';
import ProductsArticle from './productsArticle/productsArticle';
import { IData } from '../../controller/types/data.interface';

interface PropData {
  data: IData[];
}

function Products({ data }: PropData) {
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
          data.map((el) => (
            <ProductsArticle
              article={el}
              key={el.id}
            />
          ))
        }
      </div>
    </section>
  );
}

export default Products;
