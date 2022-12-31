import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Header from './container/Header/Header';
import Footer from './container/Footer/Footer';
import useUpdateCart from './hooks/useUpdateCart';
import CartContext from './context/cart.context';
import useUpdateProducts from './hooks/useUpdateProducts';
import ProductsContext from './context/products.context';
import MainRoute from './Routes/MainRoute/MainRoute';
import ErrorRoute from './Routes/ErrorRoute/ErrorRoute';
import CartRoute from './Routes/CartRoute/CartRoute';
import ArticleRoute from './Routes/ArticleRoute/ArticleRoute';

function App() {
  const cart = useUpdateCart();
  const products = useUpdateProducts();

  return (
    <ProductsContext.Provider value={products}>
      <CartContext.Provider value={cart}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/">
              <Route
                index
                element={<MainRoute />}
              />
              <Route
                path="cart"
                element={<CartRoute />}
              />
            </Route>
            <Route
              path="articles/:articleId"
              element={<ArticleRoute />}
            />
            <Route
              path="*"
              element={<ErrorRoute />}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContext.Provider>
    </ProductsContext.Provider>
  );
}

export default App;
