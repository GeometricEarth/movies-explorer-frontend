import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import MainTemplate from '../MainTemplate/MainTemplate';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';
import MobileMenu from '../MobileMenu/MobileMenu';
import Profile from '../Profile/Profile';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {
  const [isAuthorized, setAuthorized] = useState(false);
  const [isMobileMenuOpened, setMobileMenuOpened] = useState(false);
  const [user, setUser] = useState({
    name: 'Виталий',
    email: 'pochta@yandex.ru',
  });
  const [currentUser, setCurrentUser] = useState({});

  const handleCloseMobileMenu = () => {
    setMobileMenuOpened(false);
  };
  const handleOpenMobileMenu = () => {
    setMobileMenuOpened(true);
  };
  const handleSaveUserData = (user) => {
    setUser(user);
  };
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__content">
          <Routes>
            <Route
              path="/"
              element={
                <MainTemplate
                  isAuthorized={isAuthorized}
                  onOpenMobileMenu={handleOpenMobileMenu}
                >
                  <Main />
                </MainTemplate>
              }
            ></Route>
            <Route
              path="/movies"
              element={
                <MainTemplate
                  isAuthorized={isAuthorized}
                  onOpenMobileMenu={handleOpenMobileMenu}
                >
                  <Movies />
                </MainTemplate>
              }
            ></Route>
            <Route
              path="/saved-movies"
              element={
                <MainTemplate
                  isAuthorized={isAuthorized}
                  onOpenMobileMenu={handleOpenMobileMenu}
                >
                  <SavedMovies />
                </MainTemplate>
              }
            ></Route>
            <Route
              path="/profile"
              element={
                <Profile
                  user={user}
                  onSave={handleSaveUserData}
                  isAuthorized={isAuthorized}
                  onOpenMobileMenu={handleOpenMobileMenu}
                />
              }
            ></Route>
            <Route path="/signin" element={<Login />}></Route>
            <Route path="/signup" element={<Register />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>

          <MobileMenu
            isOpened={isMobileMenuOpened}
            onClose={handleCloseMobileMenu}
          ></MobileMenu>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
