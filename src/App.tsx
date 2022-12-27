import './App.scss';
import Header from './container/Header/Header';
import Footer from './container/Footer/Footer';
import Filters from './container/MainPage/Filters/Filters';
import Products from './container/MainPage/Products/Products';
import useUpdateCart from './hooks/useUpdateCart';
import CartContext from './context/cart.context';
import useUpdateProducts from './hooks/useUpdateProducts';
import ProductsContext from './context/products.context';
import CartPageView from './components/CartPage/CartPageView';

function App() {
  const ctx = useUpdateCart();

  return (
    <>
      <CartContext.Provider value={ctx}>
        <Header />
      </CartContext.Provider>
      <main className="main">
        <ProductsContext.Provider value={useUpdateProducts()}>
          {/* <Filters /> */}
          <CartContext.Provider value={ctx}>
            <Products />
            <CartPageView />
          </CartContext.Provider>
        </ProductsContext.Provider>

      </main>
      <Footer />
    </>
  );
}

export default App;
