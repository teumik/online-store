import React from 'react';
import './Modal.scss';

interface ModalViewProps {
  isActive: boolean;
  closeModal: (e: React.MouseEvent | React.KeyboardEvent) => void;
}

export default function ModalView(
  {
    isActive,
    closeModal,
  }: ModalViewProps
) {
  return (
    <div
      className={isActive ? 'popup-active popup' : 'popup'}
      onClick={(e) => closeModal(e)}
      onKeyDown={(e) => closeModal(e)}
      role="textbox"
      tabIndex={0}
    >
      <div className="wrapper">
        <form className="form">
          <h2 className="form__title">Personal details</h2>
          <div className="form__control">
            <input type="text" className="form__control-input" placeholder="Name" />
            <p className="form__control-error">error</p>
          </div>

          <div className="form__control">
            <input type="tel" className="form__control-input" placeholder="Phone number" />
            <p className="form__control-error">error</p>
          </div>
          <div className="form__control">
            <input type="text" className="form__control-input" placeholder="Delivery address" />
            <p className="form__control-error">error</p>
          </div>
          <div className="form__control">
            <input type="email" className="form__control-input" placeholder="E-mail" />
            <p className="form__control-error">error</p>
          </div>
          <h2 className="form__title">Credit card details</h2>
          <div className="form__credit-card card">
            <div className="card__top">
              <img src="./visa-3-svgrepo-com.svg" alt="icon" className="card-icon" />
              <input type="text" className="card-number" />
            </div>
            <div className="card__bot">
              <div className="card__bot-valid valid">
                VALID:
                <input type="text" className="card-valid" />
              </div>
              <div className="card__bot-cvv cvv">
                CVV:
                <input type="text" className="card-cvv" />
              </div>
            </div>
          </div>
          <button type="submit">CONFIRM</button>
        </form>
      </div>
    </div>
  );
}
