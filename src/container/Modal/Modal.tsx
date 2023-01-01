import { useContext } from 'react';
import ModalView from '../../components/Modal/ModalView';
import PopupContext from '../../context/modal.context';

export default function Modal() {
  const { modalState, closeModal } = useContext(PopupContext);
  return (
    <ModalView isActive={modalState} closeModal={closeModal} />
  );
}
