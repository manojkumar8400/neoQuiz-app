import { Routes, Route } from 'react-router-dom';

import "./styles/utils.css";
import './App.css';
import { Footer, NavBar, PageNotFound } from './components/index';
import { HomePage, McqPage, Rules} from "./pages/index";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={< HomePage />} />
        <Route path="/rule" element={ < Rules />} />
        <Route path='/mcq-page' element={ < McqPage />}/>
        <Route path="*" element={< PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
