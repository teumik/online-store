import './productsArticle.scss';

function ProductsArticle() {
  return (
    <article className="item">
      <div className="item__section">
        <img
          className="item__image"
          src="https://droider.ru/wp-content/uploads/2021/03/anons_xiaomi_mi_notebook_pro_14_i_pro_15_premium_noutbuki_v_metalle_picture2_0.jpg"
          alt="description"
        />
        <div className="item__discount">%</div>
      </div>
      <div className="item__section">
        <h3 className="item__title">Good - The best good the world ever seen. It is so fuckin&apos; tasty!</h3>
        <p className="item__price">$9999</p>
        <button className="item__button" type="button">Buy</button>
      </div>
    </article>
  );
}

export default ProductsArticle;
