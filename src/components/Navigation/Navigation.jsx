import { useNavigate, useLocation } from 'react-router-dom';
import './Navigation.css';
import Button from '../Button/Button';
import LinkStyled from '../LinkStyled/LinkStyled';

export default function Navigation({ isAuthorized, onOpenMobileMenu }) {
  const navigate = useNavigate();
  const location = useLocation();
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
            <LinkStyled
              className={
                'navigation__link' +
                (location.pathname === '/movies'
                  ? ' navigation__link_current'
                  : '')
              }
              to="/movies"
            >
              Фильмы
            </LinkStyled>
            <LinkStyled
              className={
                'navigation__link' +
                (location.pathname === '/saved-movies'
                  ? ' navigation__link_current'
                  : '')
              }
              to="/saved-movies"
            >
              Сохранённые фильмы
            </LinkStyled>
          </nav>
          <Button
            classList="button_type_profile"
            onClick={handleClickProfile}
          >
            Аккаунт
          </Button>
        </>
      )}
      {!isAuthorized && (
        <nav className="auth">
          <LinkStyled className="auth__button auth__button_type_sign-up" to="/signup">
            Регистрация
          </LinkStyled>
          <Button
            classList="auth__button auth__button_type_sign-in"
            onClick={handleClickSignIn}
          >
            Войти
          </Button>
        </nav>
      )}
      {isAuthorized && (
        <Button classList="button_type_burger-menu" onClick={onOpenMobileMenu}></Button>
      )}
    </>
  );
}
