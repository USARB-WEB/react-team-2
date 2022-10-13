import { useForm } from 'react-hook-form';
import formModel from '../../static/formModel.json';
import FormInputs from '../formInputs/FormInputs';

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange"
  });

  const onSubmit = (fields) => {
    console.log(fields);
    reset();
  }

  return (
    <>
      <div>Shoping form</div>
      <form
        onSubmit={handleSubmit(onSubmit)}
      >
        {formModel.map(element => (
          <FormInputs
            key={element.name}
            element={element}
            register={register}
            errors={errors}
          />
          ))}
        <input
          type={'submit'}
        />
      </form>
    </>
  )
}

export default Form;