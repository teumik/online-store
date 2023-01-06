import { createContext } from 'react';
import useOpenModal from '../hooks/useOpenModal';

const ModalContext = createContext({} as ReturnType<typeof useOpenModal>);

export default ModalContext;
