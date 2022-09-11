import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from "./components/SignUp/SignUp";
import LogInPage from "./components/LogIn/LogInPage";
import ResetPassword from './components/ResetPassword/ResetPassword';
import Content from "./components/Content/Content";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<LogInPage />} />
      <Route path="/resetpassword" element={<ResetPassword />} />
      <Route path="/" element={<App />} />
      <Route path="/science" element={<Content />} />
      <Route path="/technology" element={<Content />} />
      <Route path="/sports" element={<Content />} />
      <Route path="/games" element={<Content />} />
    </Routes>
  </BrowserRouter>
);
