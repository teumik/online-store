import { IErrors, IValues } from '../hooks/useForm';

const emailRegExp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
const phoneRegExp = /^(\+)[0-9]{9,16}$/;

const nameRegExp = /^[a-z,A-Z,а-я, А-Я]{3,30}\d*\s[a-z ,A-Z,а-я, А-Я]{3,30}\d*$/;
const addressRegExp = /^([^\s]{5,20}\d*\s){2}[^\s]{5,20}\d*$/;

const emptyMessage = 'This field cannot be empty';
const wrongMessage = 'Incorrect value';

export default function validate(values: IValues): IErrors {
  const errors: IErrors = {};

  if (!values.name) {
    errors.name = emptyMessage;
  } else if (!nameRegExp.test(values.name.trim())) {
    errors.name = wrongMessage;
  }

  if (!values.phone) {
    errors.phone = emptyMessage;
  } else if (!phoneRegExp.test(values.phone)) {
    errors.phone = wrongMessage;
  }

  if (!values.address) {
    errors.address = emptyMessage;
  } else if (!addressRegExp.test(values.address)) {
    errors.address = wrongMessage;
  }

  if (!values.email) {
    errors.email = emptyMessage;
  } else if (!emailRegExp.test(values.email)) {
    errors.email = wrongMessage;
  }

  if (!values.cardNumber) {
    errors.cardNumber = emptyMessage;
  } else if (values.cardNumber.length !== 19) {
    errors.cardNumber = wrongMessage;
  }

  if (!values.cardData) {
    errors.cardData = emptyMessage;
  } else if (values.cardData.length !== 5) {
    errors.cardData = wrongMessage;
  } else if (parseInt(values.cardData.slice(0, 2), 10) > 12) {
    errors.cardData = wrongMessage;
  }

  if (!values.cardCvv) {
    errors.cardCvv = wrongMessage;
  } else if (values.cardCvv.length !== 3) {
    errors.cardCvv = wrongMessage;
  }

  return errors;
}
