import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import MainTemplate from '../MainTemplate/MainTemplate';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
  const [isAuthorized, setAuthorized] = useState(false);
  return (
    <div className="page">
      <Routes>
        <Route
          path="/"
          element={
            <MainTemplate isAuthorized={isAuthorized}>
              <Main />
            </MainTemplate>
          }
        ></Route>
        <Route
          path="/movies"
          element={
            <MainTemplate isAuthorized={isAuthorized}>
              <Movies />
            </MainTemplate>
          }
        ></Route>
        <Route path="/signin" element={<Login />}></Route>
        <Route path="/signup" element={<Register />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
