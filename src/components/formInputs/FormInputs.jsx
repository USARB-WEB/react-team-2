import FormInputText from "./FormInputText";
import FormInputNumber from "./FormInputNumber";
import FormInputSelect from "./FormInputSelect";
import FormInputCheckbox from "./FormInputCheckbox";
import FormInputRadio from "./FormInputRadio";

const FormInputs = ({element, register, errors}) => {
  let InputElement;
  switch (element.type) {
    case "text": InputElement = FormInputText
      break;
    case "number": InputElement = FormInputNumber
      break;
    case "select": InputElement = FormInputSelect
      break;
    case "checkbox": InputElement = FormInputCheckbox
      break;
    case "radio": InputElement = FormInputRadio
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