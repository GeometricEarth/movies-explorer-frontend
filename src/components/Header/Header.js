import './Header.css';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';

export default function Header() {
  const isAuthorized = true;
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="Логотип проекта" />
      </Link>
      <Navigation isAuthorized={isAuthorized}></Navigation>
    </header>
  );
}
