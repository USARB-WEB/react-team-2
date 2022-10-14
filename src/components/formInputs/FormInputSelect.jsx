const FormInputSelect = ({element, register, errors}) => {
  return(
    <>
      <label>{element.label}</label>
      <select
        name={element.name}
        {...register(element.name, {...element.register})}>
        {element.options.map(option => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.text}
          </option>
        ))}
      </select>
      {errors[element.name] && <p>{errors[element.name]?.message}</p>}
    </>
  )
};

export default FormInputSelect;