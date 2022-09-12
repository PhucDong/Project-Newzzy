import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import HomePage from "./components/Home/HomePage";
import { Routes, Route } from 'react-router-dom';
import SignUp from "./components/SignUp/SignUp";
import LogInPage from "./components/LogIn/LogInPage";
import ResetPassword from './components/ResetPassword/ResetPassword';
import SciencePage from "./components/Content/Science/SciencePage";
import TechnologyPage from "./components/Content/Technology/TechnologyPage";
import SportsPage from "./components/Content/Sports/SportsPage";
import Content from "./components/Content/Content";

const App = () => {
  return ( 
    <>
      <Header />

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/" element={<App />} />
        <Route path="/science" element={<SciencePage />} />
        <Route path="/technology" element={<TechnologyPage />} />
        <Route path="/sports" element={<SportsPage />} />
        <Route path="/detailed-content" element={<Content />} />
      </Routes>
    </>
  );
}

export default App;