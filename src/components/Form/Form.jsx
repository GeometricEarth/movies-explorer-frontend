import useForm from '../../hooks/useForm';
import './Form.css';

export default function Form({
  name,
  className,
  formFields,
  formType,
  submitText,
  submitError,
  onSubmit
}) {
  const initialState = {};
  formFields.forEach((element) => {
    initialState[element.name] = '';
  });

  const {
    handleInputChange,
    handleSubmit,
    formData,
    errors,
    isValid,
  } = useForm(initialState, onSubmit);

  return (
    <form
      className={'form ' + (className || '')}
      name={name}
      onSubmit={handleSubmit}
    >
      {formFields.map(({ label, type, name, pattern }, index) => {
        return (
          <div className="field" key={index}>
            <label className="field__label" htmlFor={name}>
              {label}
            </label>
            <input
              className={
                'field__input ' + (!errors[name] ? '' : 'field_input_error')
              }
              required
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
              type={type}
              name={name}
              id={name}
              onChange={handleInputChange}
              value={formData[name]}
            />
            <span className="field__error">{errors[name]}</span>
          </div>
        );
      })}
      <span className="form__error">{submitError}</span>
      <button
        className={
          `form__submit form__submit_type_${formType} ` +
          (isValid ? '' : 'form__submit_disabled')
        }
        type="submit"
        disabled={!isValid}
      >
        {submitText}
      </button>
    </form>
  );
}
