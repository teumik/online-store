import { FormEvent, useState } from 'react';
import validate from '../lib/validate';
import visa from '../assets/images/paymentSystemsIcons/visa.svg';
import masterCard from '../assets/images/paymentSystemsIcons/masterCard.svg';
import americanExpress from '../assets/images/paymentSystemsIcons/americanExpress.svg';
import def from '../assets/images/paymentSystemsIcons/default.svg';

export interface IValues {
  name: string;
  phone: string;
  address: string;
  email: string;
  cardNumber: string;
  cardData: string;
  cardCvv: string;
}
export interface IErrors {
  name?: string;
  phone?: string;
  address?: string;
  email?: string;
  cardNumber?: string;
  cardData?: string;
  cardCvv?: string;
}

const useForm = () => {
  const [errors, setErrors] = useState({} as IErrors);
  const [payment, setPayment] = useState(def);
  const [submitted, setSubmitted] = useState(false);
  const [values, setValues] = useState({
    name: '',
    phone: '',
    address: '',
    email: '',
    cardNumber: '',
    cardData: '',
    cardCvv: '',
  });

  const changeHandler = (e: FormEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    const isValid = validate(values);
    if (Object.keys(isValid).length === 0) {
      setSubmitted(true);
    } else {
      setErrors(isValid);
    }
  };

  const onCardNumberChange = (e: FormEvent) => {
    const target = e.target as HTMLInputElement;
    target.value = target.value.replace(/(\d{4})(?!\s|$)/gm, '$1 ').replace(/[^\s\d]/g, '').trim();
    const firstNumber = target.value[0];

    switch (firstNumber) {
      case '4':
        setPayment(visa);
        break;
      case '5':
        setPayment(masterCard);
        break;
      case '3':
        setPayment(americanExpress);
        break;
      default:
        setPayment(def);
    }
  };

  const onCardDateChange = (e: FormEvent) => {
    const target = e.target as HTMLInputElement;

    target.value = target.value.replace(/\D/g, '');
    if (target.value !== '') {
      target.value = target.value.match(/.{1,2}/g)!.join('/');
    } else {
      target.value = '';
    }
  };

  return {
    changeHandler,
    submitHandler,
    values,
    errors,
    onCardNumberChange,
    onCardDateChange,
    payment,
    submitted,
  };
};

export default useForm;
