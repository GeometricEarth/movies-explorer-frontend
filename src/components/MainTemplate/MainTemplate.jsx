import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function MainTemplate({ isAuthorized, onOpenMobileMenu, children }) {
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
