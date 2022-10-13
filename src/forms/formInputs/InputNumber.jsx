const FormInputNumber = ({ element, register, errors }) => {
  const { label, name, type } = element;

  return (
    <>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        {...register(name, { ...element.register })}
      />
      {errors[name] && <p>{errors[name]?.message}</p>}
    </>
  );
};

export default FormInputNumber;
