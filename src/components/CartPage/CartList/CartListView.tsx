import './cartList.scss';

interface CartListViewProps {
  elements: JSX.Element[][];
  itemsCount: number;
  onSelectPage: (index: number) => void;
  currentPage: number;
}

function CartListView({
  elements,
  itemsCount,
  onSelectPage,
  currentPage,
}: CartListViewProps) {
  return (
    <div className="productsCart">
      <div className="productsCart__header">
        <h2 className="productsCart__title">Products In Cart</h2>
        <div className="productsCart__controls">
          <div className="productsCar__count">
            ITEMS:
            <span>{itemsCount}</span>
          </div>
          <div className="productsCart__pages">
            PAGE:
            <button className="prev-page" type="button">Prev</button>
            <span>{currentPage + 1}</span>
            <button className="next-page" type="button">Next</button>
          </div>
        </div>
      </div>

      <ul className="productsCart__list">
        {elements[currentPage] ? elements[currentPage] : elements[elements.length - 1]}
      </ul>

      <ul className="productsCart__pages">
        {elements.map((_, index) => (
          <button
            className={index === currentPage ? 'active' : ''}
            type="button"
            onClick={() => onSelectPage(index)}
            key={_.toString() + index.toString()}
          >
            {index + 1}
          </button>
        ))}
      </ul>
    </div>

  );
}

export default CartListView;
