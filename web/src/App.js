import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/App.css'
import Nav from './nav-footer/Nav';
import HeaderImg from './components/HeaderImg';
import Home from './pages/Home';
import Footer from './nav-footer/Footer';



function App() {
  return (
    <div className="App">

      <Router>
        <Nav />
        <HeaderImg />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>



    </div>
  );
}


export default App;
