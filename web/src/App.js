import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/App.css'
import Nav from './nav-footer/Nav';
import HeaderImg from './components/HeaderImg';
import Home from './pages/Home';
import Footer from './nav-footer/Footer';
import PageNotFound from './pages/PageNotFound';
import Events from './pages/Events';
import EventMap from './pages/EventMap';
import ReportFireAndPollution from './pages/ReportFireAndPollution';
import TripSuggestions from './pages/TripSuggestions';
import {EventProvider} from './contexes/Eventcontext'
import { TripSuggestionProvider } from './contexes/TripSuggestionscontext';
import SubmitToTripSuggestions from './pages/SubmitToTripSuggestions';
import About from './pages/About';
import Thehillsarealivewiththesignofplastic from './articles/Thehillsarealivewiththesignsofplastic';
import Waterborneinfections from './articles/Waterborneinfections';
import RisksOfDrinkingStreamWater from './articles/RisksOfDrinkingStreamWater';
import WhatisLandPollution from './articles/WhatisLandPollution'


console.log("made by: Enes Ago and Stefan Dishliovski")

function App() {
  return (
    <div className="App">

      <EventProvider>
        <TripSuggestionProvider>

      <Router>
        <Nav />
        <HeaderImg />
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} exact />

          {/* Articles */}
          <Route path="/The-hills-are-alive-with-the-signs-of-plastic" element={ <Thehillsarealivewiththesignofplastic /> } exact />
          <Route path="/What-is-Land-Pollution" element={<WhatisLandPollution />} exact />
          <Route path="/Risks-Of-Drinking-Stream-Water" element={<RisksOfDrinkingStreamWater />} exact />
          <Route path="/Water-borne-infections" element={<Waterborneinfections />} exact />


          {/* Report Fire And Pollution */}
          <Route path="/report" element={<ReportFireAndPollution />} exact />

          {/* Events */}
          <Route path="/CleanUps" element={<Events />} exact />
          <Route path="/CleanUps/:id" element={<EventMap />} />

          {/* Forum */}
          <Route path="/TripSuggestion" element={<TripSuggestions />} exact />

          {/* SubmitToTripSuggestions */}
          <Route path="/SubmitToTripSuggestions" element={<SubmitToTripSuggestions />} exact />

          {/* About */}
          <Route path="/about" element={<About />} exact />

          {/* page 404 */}
          <Route path="*" element={<PageNotFound />} />

        </Routes>
        <Footer />
      </Router>


      </TripSuggestionProvider>
      </EventProvider>

    </div>
  );
}


export default App;
