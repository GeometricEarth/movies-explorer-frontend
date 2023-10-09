import './Form.css';

export default function Form({ name, className, formData, formType, submitText }) {
  return (
    <form className={'form ' + (className || '')} name={name}>
      {formData.map(({ label, type, name }, index) => {
        return (
          <div className="form__input-wrapper" key={index}>
            <label className="form__label" htmlFor={name}>
              {label}
            </label>
            <input className="form__input" type={type} name={name} id={name} />
          </div>
        );
      })}
      <span className="form__error form__error_visible">
        Что-то пошло не так...
      </span>
      <button className={'form__submit ' + ('form__submit_type_' + formType)} type="submit">
        {submitText}
      </button>
    </form>
  );
}
