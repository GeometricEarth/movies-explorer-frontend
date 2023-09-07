import { Link, useNavigate } from 'react-router-dom';
import './Navigation.css';
import Button from '../Button/Button';
import burgerButton from '../../images/burgerButton.svg'

export default function Navigation({ isAuthorized, onSignIn }) {
  const navigate = useNavigate();
  const handleClickProfile = ()=>{
    navigate('/profile');
  }
  const handleClickSignIn= ()=>{
    navigate('/signin');
  }
  return (<>
    {isAuthorized && (<><nav className='navigation'>
      <Link className="navigation__link" to="/movies">Фильмы</Link>
      <Link className="navigation__link" to="/saved-movies">Сохранённые фильмы</Link>
    </nav>
      <Button classList='navigation__profile-button' onClick={handleClickProfile}>Аккаунт</Button>
    </>
    )}
    {!isAuthorized && (<nav>
      <Link className='navigation__sign-up' to="/signup">Регистрация</Link>
      <Button classList="navigation__sign-in-button" onClick={handleClickSignIn}>Войти</Button>
    </nav>)}
    <Button classList="navigation__burger-menu-button"><img src={burgerButton} alt='Открыть меню навигации' /></Button>
  </>
  )
}
