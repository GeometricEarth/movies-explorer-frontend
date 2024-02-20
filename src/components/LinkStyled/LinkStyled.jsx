import './LinkStyled.css';
import { Link } from 'react-router-dom';

const LinkStyled = ({ children, className, ...props }) => {
  return (
    <Link className={'link ' + className} {...props}>
      {children}
    </Link>
  );
};

export default LinkStyled;
