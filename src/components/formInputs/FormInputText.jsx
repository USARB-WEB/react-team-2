const FormInputText = ({element, register, errors}) => {
  return(
    <>
      <label>{element.label}</label>
      <input
        type={element.type}
        name={element.name}
        {...register(element.name, {...element.register})}
      />
      {errors[element.name] && <p>{errors[element.name]?.message}</p>}
    </>
  )
};

export default FormInputText;