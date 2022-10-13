const FormInputSelect = ({ element, register, errors }) => {
  const { label, name, options } = element;

  return (
    <>
      <label>{label}</label>
      <select name={name} {...register(name, { ...element.register })}>
        {options.map((option) => {
          const { value, text } = option;

          return (
            <option key={value} value={value}>
              {text}
            </option>
          );
        })}
      </select>
      {errors[name] && <p>{errors[name]?.message}</p>}
    </>
  );
};

export default FormInputSelect;
