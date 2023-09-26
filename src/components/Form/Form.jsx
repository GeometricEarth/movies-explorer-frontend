import './Form.css';

export default function Form({ name, className, formData }) {
  return (
    <form className={'form ' + (className || '')} name={name}>
      {formData.map(({ label, type, name }, index) => {
        return (
          <div key={index} >
            <label className="form__label" htmlFor={name}>
              {label}
            </label>
            <input
              className="form__input"
              type={type}
              name={name}
              id={name}
            />
            <span className="form__error form__error_visible">
              Что-то пошло не так...
            </span>
          </div>
        )
      })}
    </form >
  )
}