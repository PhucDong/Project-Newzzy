import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import SignUp from "./components/SignUp/SignUp";
import LogIn from "./components/LogIn/LogIn";
import ResetPassword from './components/ResetPassword/ResetPassword';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/resetpassword" element={<ResetPassword />} />
    </Routes>
  </BrowserRouter>
);
