import React from 'react';
import './Modal.scss';
import Form from '../../container/Form/Form';

interface ModalViewProps {
  isActive: boolean;
  closeModal: (e: React.MouseEvent | React.KeyboardEvent) => void;
}

export default function ModalView({ isActive, closeModal }: ModalViewProps) {
  return (
    <div
      className={isActive ? 'popup-active popup' : 'popup'}
      onClick={(e) => closeModal(e)}
      onKeyDown={(e) => closeModal(e)}
      role="textbox"
      tabIndex={0}
    >
      <div className="wrapper">
        <Form />
      </div>
    </div>
  );
}
