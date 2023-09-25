import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';

function App() {
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
    </div>
  );
}

export default App;
