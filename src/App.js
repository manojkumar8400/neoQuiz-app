import { Routes, Route } from 'react-router-dom';

import "./styles/utils.css";
import './App.css';
import { Footer, NavBar, PageNotFound } from './components/index';
import { HomePage, McqPage, Rules, Login, Signup } from "./pages/index";
import RequireAuth from "./RequireAuth";

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={< HomePage />} />
        <Route path='/mcq-page' element={< McqPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={< Signup />} />
        <Route path="/rule" element={
          <RequireAuth>
            < Rules />
          </RequireAuth>} />
        <Route path="*" element={< PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
