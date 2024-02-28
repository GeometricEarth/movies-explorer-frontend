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
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {
  const [isAuthorized, setAuthorized] = useState(false);
  const [isMobileMenuOpened, setMobileMenuOpened] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const [user, setUser] = useState({
    name: 'Виталий',
    email: 'pochta@yandex.ru',
  });

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
    <div className="page">
      <div className="page__content">
        <CurrentUserContext.Provider value={{ currentUser, setCurrentUser, isAuthorized, setAuthorized }}>
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
                <ProtectedRoute isAuthorized = {isAuthorized}>

                <MainTemplate
                  isAuthorized={isAuthorized}
                  onOpenMobileMenu={handleOpenMobileMenu}
                  >
                  <Movies />
                </MainTemplate>
                  </ProtectedRoute>
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
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
