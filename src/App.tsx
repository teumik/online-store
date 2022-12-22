import './App.scss';
import { createContext, useContext, useState } from 'react';
import Header from './container/Header/Header';
import Footer from './container/Footer/Footer';
import Filters from './container/MainPage/Filters/Filters';
import Products from './container/MainPage/Products/Products';
import useUpdateCart from './hooks/useUpdateCart';
import CartContext from './context/cart.context';
import DataContext from './context/data.context';

/** CHANGED FILES
 * APP.TSX
 * FILTER.TSX
 * DATA.CONTROLLER.TSX
*/

/** LINK TO TEST MERGE:
 * https://github.com/teumik/test
*/

// IMPORT CUSTOM HOOK
export function useFilterUpdate() {
  const contеxt = useContext(DataContext);
  // USE FULL CONTEXT IN STATE
  const [state, setState] = useState(contеxt);

  function change() {
    // PASS ALL METHODS THROUGH PRODUCT STATE
    state.delete();
    const ctxCopy = Object.create(contеxt);
    setState(ctxCopy);
  }

  return {
    state,
    change,
  };
}

// IMPORT PRODUCT CONTEXT
export const ProductsContext = createContext({} as ReturnType<typeof useFilterUpdate>);

function App() {
  const ctx = useUpdateCart();
  // CREATE INSTANCE CONTEXT VALUE
  const ctx2 = useFilterUpdate();

  return (
    <>
      <CartContext.Provider value={ctx}>
        <Header />
      </CartContext.Provider>
      <main className="main">
        <ProductsContext.Provider value={ctx2}>
          <Filters />
          <CartContext.Provider value={ctx}>
            <Products />
          </CartContext.Provider>
        </ProductsContext.Provider>
      </main>
      <Footer />
    </>
  );
}

export default App;
