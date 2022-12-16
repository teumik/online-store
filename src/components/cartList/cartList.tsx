
import './cartList.scss'

function CartList() {
    return (

        <div className="productsCart">
            <div className="productsCart__header">
                <h2 className="productsCart__title">Products In Cart</h2>
                <div className="productsCart__controls">
                    <div className="productsCar__count">ITEMS: <span>1</span></div>
                    <div className="productsCart__pages">
                        PAGE:
                        <button className="prev-page">Prev</button>
                        <span>1</span>
                        <button className="next-page">Next</button>
                    </div>
                </div>
            </div>

            <ul className="productsCart__list">
                <li className="productsCart__item productsItem">
                    <p className="productsItem__pos">1</p>
                    <img src="#" alt="img" className="productsItem__thumbnail" />
                    <div className="productsItem__info info">
                        <h5 className="info__title">Phone Name</h5>
                        <p className="info__descr">
                            Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the
                            device has made its way to the UK.
                        </p>
                        <div className="info__addition">
                            <p className="info__rating">4.09</p>
                            <p className="info__discount">4.09</p>
                        </div>
                    </div>
                    <div className="productsItem__stock stock">
                        <h6 className="stock__value">32</h6>
                        <div className="stock__controls">
                            <button className="stock__add"> + </button>
                            <span>1</span>
                            <button className="stock__remove"> - </button>
                        </div>
                        <p className="stock__price">500$</p>
                    </div>
                </li>
            </ul>
        </div>


    )
}



export default CartList