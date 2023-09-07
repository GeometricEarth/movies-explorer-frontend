import { Link } from 'react-router-dom';
import './Navigation.css';
import Button from '../Button/Button';
import buregerButton from '../../images/burgerButton.svg'

export default function Navigation({ isAuthorized }) {
  return (<>
    {isAuthorized && (<><nav className='navigation'>
      <Link className="navigation__link">Фильмы</Link>
      <Link className="navigation__link">Сохранённые фильмы</Link>
    </nav>
      <Button classList='navigation__profile-button'>Аккаунт</Button>
    </>
    )}
    {!isAuthorized && (<nav>
      <Link className='navigation__sign-up'>Регистрация</Link>
      <Button classList="navigation__sign-in-button">Войти</Button>
    </nav>)}
    <Button classList="navigation__burger-menu-button"><img src={buregerButton} alt='Открыть меню навигации' /></Button>
  </>
  )
}
