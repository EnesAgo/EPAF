import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/App.css'
import Nav from './nav-footer/Nav';
import HeaderImg from './components/HeaderImg';
import Home from './pages/Home';
import Footer from './nav-footer/Footer';
import PageNotFound from './pages/PageNotFound';



function App() {
  return (
    <div className="App">

      <Router>
        <Nav />
        <HeaderImg />
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} exact />

          {/* Report Fire And Pollution */}
          <Route path="/" element={<Home />} exact />

          {/* page 404 */}
          <Route path="*" element={<PageNotFound />} />

        </Routes>
        <Footer />
      </Router>



    </div>
  );
}


export default App;
