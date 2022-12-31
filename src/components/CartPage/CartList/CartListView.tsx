import './cartList.scss';
import { useContext } from 'react';
import CartContext from '../../../context/cart.context';
import ProductsArticle from '../../../container/MainPage/Products/ProductsArticle/productsArticle';

function CartListView() {
  const { cartState } = useContext(CartContext);
  const articles = cartState.cartItems.map((article) => {
    if (!article) return null;
    return (
      <ProductsArticle
        key={article.id}
        article={article}
      />
    );
  });

  return (
    <div className="productsCart">
      <div className="productsCart__header">
        <h2 className="productsCart__title">Products In Cart</h2>
        <div className="productsCart__controls">
          <div className="productsCar__count">
            ITEMS:
            <span>1</span>
          </div>
          <div className="productsCart__pages">
            PAGE:
            <button className="prev-page" type="button">Prev</button>
            <span>1</span>
            <button className="next-page" type="button">Next</button>
          </div>
        </div>
      </div>

      <ul className="productsCart__list">
        {articles}
      </ul>
    </div>

  );
}

export default CartListView;
