import './Greeting.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';


export default function Greeting({ children }) {
  return (
    <div className='greeting'>
      <Link className='greeting__link' to="/">
        <img className="logo" src={logo} alt="Логотип проекта" />
      </Link>
      <h1 className='greeting__text'>{children}</h1>
    </div>
  )
}