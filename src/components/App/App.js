import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import './App.css';

function App() {
  return (
    <div className="page">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
