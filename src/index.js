import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from "./components/SignUp/SignUp";
import LogInPage from "./components/LogIn/LogInPage";
import ResetPassword from './components/ResetPassword/ResetPassword';
import SciencePage from "./components/Content/Science/SciencePage";
import TechnologyPage from "./components/Content/Technology/TechnologyPage";
import SportsPage from "./components/Content/Sports/SportsPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<LogInPage />} />
      <Route path="/resetpassword" element={<ResetPassword />} />
      <Route path="/" element={<App />} />
      <Route path="/science" element={<SciencePage />} />
      <Route path="/technology" element={<TechnologyPage />} />
      <Route path="/sports" element={<SportsPage />} />
    </Routes>
  </BrowserRouter>
);
