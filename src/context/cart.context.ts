import { createContext } from 'react';
import useUpdateCart from '../hooks/useUpdateCart';

const CartContext = createContext({} as ReturnType<typeof useUpdateCart>);
export default CartContext;
