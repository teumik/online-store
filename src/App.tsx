import './App.scss';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import Header from './container/Header/Header';
import Footer from './container/Footer/Footer';
import Filters from './container/MainPage/Filters/Filters';
import Products from './container/MainPage/Products/Products';
import useUpdateCart from './hooks/useUpdateCart';
import CartContext from './context/cart.context';
import useUpdateProducts from './hooks/useUpdateProducts';
import ProductsContext from './context/products.context';
import CartPageView from './components/CartPage/CartPageView';
import MainPage from './components/MainPage/MainPage';
import ProductsArticle from './container/MainPage/Products/ProductsArticle/productsArticle';
import { dataController } from './controller/data.controller';

function ArticlePage() {
  const product = dataController.view.find((article) => article.id === 1);

  if (!product) {
    return (
      <div>404</div>
    );
  }

  return (
    <ProductsArticle
      article={product}
    />
  );
}

function App() {
  const cart = useUpdateCart();
  const products = useUpdateProducts();

  return (
    <BrowserRouter>
      <CartContext.Provider value={cart}>
        <Header />
      </CartContext.Provider>
      <Routes>
        <Route path="/">
          <Route
            index
            element={(
              <MainPage>
                <ProductsContext.Provider value={products}>
                  <Filters />
                  <CartContext.Provider value={cart}>
                    <Products />
                  </CartContext.Provider>
                </ProductsContext.Provider>
              </MainPage>
            )}
          />
          <Route
            path="cart"
            element={(
              <MainPage>
                <ProductsContext.Provider value={products}>
                  <CartContext.Provider value={cart}>
                    <CartPageView />
                  </CartContext.Provider>
                </ProductsContext.Provider>
              </MainPage>
            )}
          />
        </Route>
        <Route
          path="/articles/:articleId"
          element={<ArticlePage />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
