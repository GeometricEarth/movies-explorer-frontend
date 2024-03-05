import './App.css';

import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

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
import { getUserData, signOut } from '../../utils/auth';

function App() {
  const [isAuthorized, setAuthorized] = useState(false);
  const [isMobileMenuOpened, setMobileMenuOpened] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthorized) {
      getUserData()
        .then((user) => {
          setAuthorized(true);
          setCurrentUser(user);
          navigate(location.pathname);
        })
        .catch((err) => {
          setAuthorized(false);
          console.log(err);
        });
    }
  }, []);

  const handleCloseMobileMenu = () => {
    setMobileMenuOpened(false);
  };
  const handleOpenMobileMenu = () => {
    setMobileMenuOpened(true);
  };
  const handleSaveUserData = (user) => {
    setCurrentUser(user);
  };
  const handleLogOut = () => {
    signOut()
      .then(() => {
        setAuthorized(false);
        setCurrentUser({});
        localStorage.removeItem('filteredFilms');
        localStorage.removeItem('searchQuery');
        localStorage.removeItem('isShorts');
        navigate('/');
      })
      .catch(console.log);
  };

  return (
    <div className="page">
      <div className="page__content">
        <CurrentUserContext.Provider
          value={{ currentUser, setCurrentUser, isAuthorized, setAuthorized }}
        >
          <Routes>
            <Route
              path="/"
              element={
                <MainTemplate onOpenMobileMenu={handleOpenMobileMenu}>
                  <Main />
                </MainTemplate>
              }
            ></Route>
            <Route
              path="/movies"
              element={
                <ProtectedRoute
                  renderElement={() => {
                    return (
                      <MainTemplate onOpenMobileMenu={handleOpenMobileMenu}>
                        <Movies />
                      </MainTemplate>
                    );
                  }}
                ></ProtectedRoute>
              }
            ></Route>
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute
                  renderElement={() => {
                    return (
                      <MainTemplate onOpenMobileMenu={handleOpenMobileMenu}>
                        <SavedMovies />
                      </MainTemplate>
                    );
                  }}
                ></ProtectedRoute>
              }
            ></Route>
            <Route
              path="/profile"
              element={
                <ProtectedRoute
                  renderElement={() => {
                    return (
                      <Profile
                        onSave={handleSaveUserData}
                        onLogOut={handleLogOut}
                        onOpenMobileMenu={handleOpenMobileMenu}
                      />
                    );
                  }}
                ></ProtectedRoute>
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
