import { useForm } from "react-hook-form";
import formInputsModel from "../../static/formInputsModel.json";
import FormInputs from "../formInputs/FormInputs";
import "./cartForm.css";

const CartForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const onSubmit = (fields) => {
    console.log(fields);
    reset();

    // TODO: SEND DATA TO DB.
  };
  return (
    <>
      <span className="title">Shopping form</span>
      <form onSubmit={handleSubmit(onSubmit)}>
        {formInputsModel.map((element) => (
          <FormInputs
            key={element.name}
            element={element}
            register={register}
            errors={errors}
          />
        ))}
        <input type={"submit"} />
      </form>
    </>
  );
};

export default CartForm;
