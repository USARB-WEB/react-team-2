import FormInputText from "./FormInputText";
import FormInputNumber from "./FormInputNumber";
import FormInputSelect from "./FormInputSelect";

const FormInputs = ({element, register, errors}) => {
  let InputElement;
  switch (element.type) {
    case "text": InputElement = FormInputText
      break;
    case "number": InputElement = FormInputNumber
      break;
    case "select": InputElement = FormInputSelect
      break;
    default : InputElement = FormInputText ;
  }

  return (
    <InputElement
      element={element}
      register={register}
      errors={errors}
      />
  )
}

export default FormInputs;