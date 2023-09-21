import { Link, useNavigate } from 'react-router-dom';
import './Navigation.css';
import Button from '../Button/Button';

export default function Navigation({ isAuthorized }) {
  const navigate = useNavigate();
  const handleClickProfile = () => {
    navigate('/profile');
  };
  const handleClickSignIn = () => {
    navigate('/signin');
  };
  return (
    <>
      {isAuthorized && (
        <>
          <nav className="navigation">
            <Link className="navigation__link" to="/movies">
              Фильмы
            </Link>
            <Link className="navigation__link" to="/saved-movies">
              Сохранённые фильмы
            </Link>
          </nav>
          <Button
            classList="auth-buttons auth-buttons_type_profile"
            onClick={handleClickProfile}
          >
            Аккаунт
          </Button>
        </>
      )}
      {!isAuthorized && (
        <nav className='auth-buttons'>
          <Link className="auth-buttons_type_sign-up" to="/signup">
            Регистрация
          </Link>
          <Button
            classList="auth-buttons_type_sign-in"
            onClick={handleClickSignIn}
          >
            Войти
          </Button>
        </nav>
      )}
      {isAuthorized && (
        <Button classList="navigation__burger-menu-button">
        </Button>
      )}
    </>
  );
}
