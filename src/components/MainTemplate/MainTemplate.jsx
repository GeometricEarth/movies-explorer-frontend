import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function MainTemplate({ onOpenMobileMenu, children }) {
  const { isAuthorized } = useContext(CurrentUserContext);
  return (
    <>
      <Header
        isAuthorized={isAuthorized}
        onOpenMobileMenu={onOpenMobileMenu}
      ></Header>
      {children}
      <Footer></Footer>
    </>
  );
}

export default MainTemplate;
