import "./styles/utils.css";
import './App.css';
import { useTheme } from './contexts/ThemeContext';
import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "./RequireAuth";
import { HomePage, Login, Signup, McqPage, Rules, Result, QuizBoard } from "./pages/index";
import { PageNotFound, Footer, NavBar } from './components/index';

function App() {

  const { theme } = useTheme();
  return (
    <div className={`App ${theme === "light" ? "bg-white" : "bg-black"} 
      ${theme === "light" ? "color-black" : "color-white"}`
    }>
      <NavBar />
      <Routes>
        <Route path='/' element={< HomePage />} />
        <Route path="*" element={< PageNotFound />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={< Signup />} />
        <Route path='/mcq-page' element={
          <RequireAuth>
            < McqPage />
          </RequireAuth>} />
        <Route path="/rule" element={
          <RequireAuth>
            < Rules />
          </RequireAuth>} />
        <Route path='/result' element={
          <RequireAuth>
            < Result />
          </RequireAuth>} />
        <Route path='/quiz-board' element={
          <RequireAuth>
            < QuizBoard />
          </RequireAuth>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
