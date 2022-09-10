import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Advertisement from "./components/Advertisement/Advertisement";
import HomePage from "./components/Home/HomePage";

const App = () => {
  return ( 
    <>
      <Header />
      <Advertisement />
      <HomePage />
    </>
  );
}

export default App;