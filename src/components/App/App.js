import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Login from '../Login/Login';

function App() {
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/signin" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
