import { FormEvent } from 'react';

import { IErrors, IValues } from '../../hooks/useForm';

import './Form.scss';

export interface FormViewProps {
  values: IValues;
  errors: IErrors;
  changeHandler: (e: FormEvent) => void;
  submitHandler: (e: FormEvent) => void;
  onCardNumberChange: (e: FormEvent) => void;
  onCardDateChange: (e: FormEvent) => void;
  payment: string;
}
export default function FormView({
  errors,
  values,
  submitHandler,
  changeHandler,
  onCardNumberChange,
  onCardDateChange,
  payment,
}: FormViewProps) {
  return (
    <form noValidate className="form" onSubmit={submitHandler}>
      <h2 className="form__title">Personal details</h2>
      <div className="form__control">
        <input
          value={values.name}
          onChange={changeHandler}
          name="name"
          type="text"
          className="form__control-input"
          placeholder="Name"
        />
        <p className="error-message">{errors.name}</p>
      </div>
      <div className="form__control">
        <input
          value={values.phone.replace(/[^/\d/+]/g, '')}
          onChange={changeHandler}
          name="phone"
          type="tel"
          className="form__control-input"
          placeholder="Phone number"
        />
        <p className="error-message">{errors.phone}</p>
      </div>
      <div className="form__control">
        <input
          value={values.address}
          onChange={changeHandler}
          name="address"
          type="text"
          className="form__control-input"
          placeholder="Delivery address"
        />
        <p className="error-message">{errors.address}</p>
      </div>
      <div className="form__control">
        <input
          value={values.email}
          onChange={changeHandler}
          name="email"
          type="email"
          className="form__control-input"
          placeholder="E-mail"
        />
        <p className="error-message">{errors.email}</p>
      </div>
      <h2 className="form__title"> Card details</h2>
      <div className="form__credit-card card">
        <div className="card__top">
          <img src={payment} alt="icon" className="card-icon" />
          <div className="card__field-wrapper">
            <input
              value={values.cardNumber}
              onChange={changeHandler}
              onInput={onCardNumberChange}
              name="cardNumber"
              type="text"
              maxLength={19}
              className="card-number"
              placeholder="**** **** **** ****"
            />
            <span className="error-message">{errors.cardNumber}</span>
          </div>
        </div>
        <div className="card__bot">
          <div className="card__bot-valid valid">

            <div className="card__field-wrapper">
              <input
                value={values.cardData}
                onChange={changeHandler}
                onInput={onCardDateChange}
                name="cardData"
                type="text"
                maxLength={5}
                className="card-valid"
                placeholder="VALID DATE"
              />
              <span className="error-message">{errors.cardData}</span>
            </div>
          </div>
          <div className="card__bot-cvv cvv">
            <div className="card__field-wrapper">
              <input
                value={values.cardCvv.replace(/\D/g, '')}
                onChange={changeHandler}
                name="cardCvv"
                type="text"
                maxLength={3}
                className="card-cvv"
                placeholder="CVV"
              />
              <span className="error-message">{errors.cardCvv}</span>
            </div>
          </div>
        </div>
      </div>
      <button type="submit">CONFIRM</button>
    </form>
  );
}
