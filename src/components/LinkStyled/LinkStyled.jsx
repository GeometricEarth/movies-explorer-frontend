import './LinkStyled.css'
import { Link } from 'react-router-dom';

const LinkStyled = ({ children, className, to }) => {
  return (
    <Link className={'link ' + className} to={to}>{children}</Link>
  )
}

export default LinkStyled;