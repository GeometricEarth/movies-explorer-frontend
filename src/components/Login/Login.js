import './Login.css';
import Greeting from '../Greeting/Greeting';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <section className="login">
      <Greeting>Рады видеть!</Greeting>
      <form className="form" name="signin">
        <label className="form__label" htmlFor="email">
          E-mail
        </label>
        <input className="form__input" type="text" name="email" id="email" />
        <span className="form__error form__error_visible">
          Что-то пошло не так...
        </span>
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
        <button className="form__submit" type="submit">
          Войти
        </button>
        <div className='register'>
          <p className="register__text">Ещё не зарегистрированы?</p>
          <Link className="register__link" to="">
            Регистрация
          </Link>
        </div>
      </form>
    </section>
  );
}
