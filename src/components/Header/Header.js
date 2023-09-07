import './Header.css';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';

export default function Header() {
  const isAuthorized = true;
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип проекта" />
      <Navigation isAuthorized={isAuthorized}></Navigation>
    </header>
  );
}
