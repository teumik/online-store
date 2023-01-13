import './cartList.scss';

interface CartListViewProps {
  elements: JSX.Element[][];
  onSelectPage: (index: number) => void;
  buttonPageHandler: (operator: string) => void;
  currentPage: number;
  onChangeItemsOnPage: (e: { target: HTMLInputElement }) => void;
  itemsOnPage: number;
}

function CartListView({
  elements,
  onSelectPage,
  currentPage,
  buttonPageHandler,
  onChangeItemsOnPage,
  itemsOnPage,
}: CartListViewProps) {
  return (
    <div data-testid="productsCart" className="productsCart">
      <div className="productsCart__header">
        <h2 className="productsCart__title">Products In Cart</h2>

        <div className="productsCart__controls">
          <input
            type="number"
            className="productsCart__itemsOnPage"
            onChange={onChangeItemsOnPage}
            min={1}
            max={10}
            value={itemsOnPage}
          />
          <div className="productsCart__pages">
            <button onClick={() => buttonPageHandler('-')} className="prev-page btn" type="button">Prev</button>
            <span>{currentPage + 1}</span>
            <button onClick={() => buttonPageHandler('+')} className="next-page btn" type="button">Next</button>
          </div>
        </div>
      </div>

      <ul className="productsCart__list">
        {elements[currentPage] ? elements[currentPage] : elements[elements.length - 1]}
      </ul>

      <ul className="productsCart__pages">
        {elements.map((_, index) => (
          <button
            className={index === currentPage ? 'active btn' : 'btn'}
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
