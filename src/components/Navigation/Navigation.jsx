import { useNavigate } from 'react-router-dom';
import './Navigation.css';
import Button from '../Button/Button';
import LinkStyled from '../LinkStyled/LinkStyled';

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
            <LinkStyled className="navigation__link" to="/movies">
              Фильмы
            </LinkStyled>
            <LinkStyled className="navigation__link" to="/saved-movies">
              Сохранённые фильмы
            </LinkStyled>
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
          <LinkStyled className="auth-buttons_type_sign-up" to="/signup">
            Регистрация
          </LinkStyled>
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
