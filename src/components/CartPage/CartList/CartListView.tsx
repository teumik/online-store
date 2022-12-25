import './cartList.scss';
import CartListItem from '../CartListItem/CartListItemView';

function CartListView() {
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
        <CartListItem />
        <CartListItem />
        <CartListItem />
      </ul>
    </div>

  );
}

export default CartListView;
