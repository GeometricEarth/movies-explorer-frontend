import './MobileMenu.css';
import { useNavigate, useLocation } from 'react-router-dom';
import LinkStyled from '../LinkStyled/LinkStyled';
import Button from '../Button/Button';

export default function MobileMenu({ isOpened, onClose }) {
  const navigate = useNavigate();
  const location = useLocation();
  const handleClickProfile = () => {
    navigate('/profile');
  };
  return (
    <div className={'mobile-menu ' + (isOpened ? 'mobile-menu_opened' : "")}>
      <div className="mobile-menu__container">
        <nav className="mobile-menu__navigation">
          <LinkStyled
            className={
              'mobile-menu__link ' +
              (location.pathname === '/' ? 'mobile-menu__link_current' : '')
            }
            to="/"
          >
            Главная
          </LinkStyled>
          <LinkStyled
            className={
              'mobile-menu__link ' +
              (location.pathname === '/movies'
                ? 'mobile-menu__link_current'
                : '')
            }
            to="/movies"
          >
            Фильмы
          </LinkStyled>
          <LinkStyled
            className={
              'mobile-menu__link ' +
              (location.pathname === '/saved-movies'
                ? 'mobile-menu__link_current'
                : '')
            }
            to="/saved-movies"
          >
            Сохранённые фильмы
          </LinkStyled>
        </nav>
        <Button classList="mobile-menu__button" onClick={handleClickProfile}>
          Аккаунт
        </Button>
        <Button
          classList="mobile-menu__close-button"
          onClick={onClose}
        ></Button>
      </div>
    </div>
  );
}
