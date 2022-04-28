import { Routes, Route } from 'react-router-dom';

import "./styles/utils.css";
import './App.css';
import { Footer, NavBar, PageNotFound } from './components/index';
import HomePage from "./pages/HomePage/Home";

function App() {
  return (
    <div className='app'>
      <NavBar />
      <Routes>
        <Route path='/' element={< HomePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
