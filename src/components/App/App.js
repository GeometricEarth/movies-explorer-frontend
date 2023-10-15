import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';
import MobileMenu from '../MobileMenu/MobileMenu';
import { useState } from 'react';

function App() {
  const [isMobileMenuOpened, setMobileMenuOpened] = useState(false);
  const handleCloseMobileMenu = ()=>{
    setMobileMenuOpened(false);
  }
  const handleOpenMobileMenu = ()=>{
    setMobileMenuOpened(true);
  }
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Main onOpenMobileMenu={handleOpenMobileMenu}/>}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/signin" element={<Login />}></Route>
        <Route path="/signup" element={<Register />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>

      <MobileMenu isOpened={isMobileMenuOpened} onClose={handleCloseMobileMenu}></MobileMenu>
    </div>
  );
}

export default App;
