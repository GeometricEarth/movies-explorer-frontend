import './Header.css';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';

export default function Header({onOpenMobileMenu}) {
  const isAuthorized = true;
  return (
    <header className="header">
      <Link className="header__logo" to="/"></Link>
      <Navigation isAuthorized={isAuthorized} onOpenMobileMenu={onOpenMobileMenu}></Navigation>
    </header>
  );
}
