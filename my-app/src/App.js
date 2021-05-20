import React from "react";
// import './css/bootstrap.min.css';
import Header from './Header.js';
import MainPage from './MainPage.js';
import Footer from './Footer.js';
import './App.css';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="container one">
        <Header/>
        <MainPage/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
