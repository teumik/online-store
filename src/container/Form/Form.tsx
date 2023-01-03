import FormSuccess from '../../components/Form/FormSuccess';
import FormView from '../../components/Form/FormView';
import useForm from '../../hooks/useForm';

export default function Form() {
  const {
    values,
    changeHandler,
    submitHandler,
    errors,
    onCardNumberChange,
    onCardDateChange,
    payment,
    submitted,
  } = useForm();

  return (
    <div>
      {!submitted
        ? (
          <FormView
            values={values}
            changeHandler={changeHandler}
            submitHandler={submitHandler}
            errors={errors}
            onCardNumberChange={onCardNumberChange}
            onCardDateChange={onCardDateChange}
            payment={payment}
          />
        ) : <FormSuccess />}
    </div>
  );
}
