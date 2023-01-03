import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router';
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
    const re = /\d{2,2}(?=(\d{2})+(?!\d))/g;
    target.value = target.value.replace(re, '$&/').replace(/[^/\d]/g, '');

    if (target.value.length === 5) {
      const month = target.value.slice(0, 2);
      if (parseInt(month, 10) > 12) {
        target.value = `12${target.value.slice(4)}`;
      }
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
