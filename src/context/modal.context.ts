import { createContext } from 'react';
import useModalState from '../hooks/useModalState';

const ModalContext = createContext({} as ReturnType<typeof useModalState>);
export default ModalContext;
