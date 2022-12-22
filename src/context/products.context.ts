import { createContext, SetStateAction } from 'react';
import { IData } from '../controller/types/data.interface';
import useUpdateProducts from '../hooks/useUpdateProducts';

const ProductsContext = createContext({} as ReturnType<typeof useUpdateProducts>);
export default ProductsContext;
