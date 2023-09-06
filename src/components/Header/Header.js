import './Header.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип проекта" />
      <nav className="menu">
        <Link className="menu__link">Фильмы</Link>
        <Link className="menu__link">Сохранённые фильмы</Link>
      </nav>
      <div>
        <button type="button" className="button">
          Аккаунт
        </button>
        <button className="button menu__sign-in">Войти</button>
      </div>
    </header>
  );
}
