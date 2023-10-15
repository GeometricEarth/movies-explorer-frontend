import './Header.css';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';

export default function Header({isAuthorized}) {
  return (
    <header className="header">
      <Link className="header__logo" to="/"></Link>
      <Navigation isAuthorized={isAuthorized}></Navigation>
    </header>
  );
}
