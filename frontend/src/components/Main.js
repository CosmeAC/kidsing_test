import React from 'react';
import "../styles/App.css";
import Navbar from './Navbar';
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Footer from "./Footer";



const Main = () => {
    return (
        <div className="App">
            <Navbar />
            <Home />
            <About />
            <Team />
            <Footer />
        </div>
    )
}

export default Main;
