import { createContext } from 'react';
import useUpdateProducts from '../hooks/useUpdateProducts';

const ProductsContext = createContext({} as ReturnType<typeof useUpdateProducts>);
export default ProductsContext;
