import React from "react";
import './App.css';
import { BrowserRouter, Routes , Route } from "react-router-dom";
import Homepages from "./components/Home/Homepages";
import Header from "./components/Header/Header";

const App = () => {
  return ( 
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/' element={<Homepages />} />
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;