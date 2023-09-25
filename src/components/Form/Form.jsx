import './Form.css';

export default function Form({ name, className, formData }) {
  return (
    <form className={'form ' + (className || '')} name={name}>
      {formData.map()}
      <>
        <label className="form__label" htmlFor="password">
          Пароль
        </label>
        <input
          className="form__input"
          type="password"
          name="password"
          id="password"
        />
        <span className="form__error form__error_visible">
          Что-то пошло не так...
        </span>
      </>
    </form>
  )
}