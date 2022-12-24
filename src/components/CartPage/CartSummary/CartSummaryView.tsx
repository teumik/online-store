import './cartSummary.scss';

function CartSummaryView() {
  return (
    <div className="summary">
      <h2 className="summary__title">Summary</h2>
      <form className="summary__form">
        <p className="summary__total-items">Products: 1</p>
        <p className="summary__total-price">Total: 50$</p>
        <input type="text" className="summary__input" placeholder="Enter promo code" />
        <p className="summary__input-placeholder">Promo for test: &quot;RS&quot; , &quot;ERM&quot;</p>
        <button type="submit">BUY NOW</button>
      </form>
    </div>
  );
}

export default CartSummaryView;
