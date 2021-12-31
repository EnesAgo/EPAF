import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/App.css'
import Nav from './nav-footer/Nav';
import HeaderImg from './components/HeaderImg';
import Home from './pages/Home';
import Footer from './nav-footer/Footer';
import PageNotFound from './pages/PageNotFound';
import Events from './pages/Events';
import ReportFireAndPollution from './pages/ReportFireAndPollution';
import {EventProvider} from './contexes/Eventcontext'


console.log("made by: Enes Ago and Stefan Dishliovski")

function App() {
  return (
    <div className="App">

      <EventProvider>

      <Router>
        <Nav />
        <HeaderImg />
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} exact />

          {/* Report Fire And Pollution */}
          <Route path="/report" element={<ReportFireAndPollution />} exact />

          {/* Events */}
          <Route path="/events" element={<Events />} exact />

          {/* page 404 */}
          <Route path="*" element={<PageNotFound />} />

        </Routes>
        <Footer />
      </Router>

      </EventProvider>

    </div>
  );
}


export default App;
