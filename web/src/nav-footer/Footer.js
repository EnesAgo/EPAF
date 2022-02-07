import React from 'react'
import '../css/Footer.css'
import { Link } from 'react-router-dom';


function Footer() {
      return (
          <footer className='footer'>
              <ul className='footer-division'>
                  <li className='footer-division-li'>
                        <h3>EPAF</h3>
                        <ul>
                            <li>
                                <Link className="footer-links" to="/">Home</Link>
                            </li>
                            <li>
                              <Link className="footer-links" to="/about" >About Us</Link>
                            </li>
                            <li>
                                <Link className="footer-links" to="/CleanUps" >CleanUps</Link>
                            </li>
                            <li>
                                <Link className="footer-links" to="/report" >Report Pollution</Link>
                            </li>
                            {/* <li>
                                <Link className="footer-links" to="/" >Water Purification</Link>
                            </li> */}
                            <li>
                                <Link className="footer-links" to="/submitToTripSuggestions" >Post a Suggestion</Link>
                            </li>
                            <li>
                                <Link className="footer-links" to="/TripSuggestion" >Trip Suggestions</Link>
                            </li>
                        </ul>
                  </li>
                  <li className='footer-division-li'>
                        <h3>Articles</h3>
                        <ul>
                            <li>
                                <Link to="The-hills-are-alive-with-the-signs-of-plastic" className='footer-links'>The hills are alive with the signs of plastic</Link>
                            </li>
                            <li>
                                <Link to="What-is-Land-Pollution" className='footer-links'>What is Land Pollution</Link>
                            </li>
                            <li>
                                <Link to="Risks-Of-Drinking-Stream-Water" className='footer-links'>Risks Of Drinking Stream Water</Link>
                            </li>
                            <li>
                                <Link to="Water-borne-infections" className='footer-links'>Water borne infections</Link>
                            </li>
                        </ul>
                  </li>
                  <li className='footer-division-li'>
                        <h3>Contact Us</h3>
                        <ul>
                            <li>
                                <a href="mailto:enesago010@gmail.com" className='footer-links'>Enes Ago: enesago010@gmail.com</a>
                            </li>
                            <li>
                                <a href="mailto:stefandishli@gmail.com" className='footer-links'>Stefan Dishliovski: stefandishli@gmail.com</a>
                            </li>
                            {/* <li>
                                <a href="tel:070600370" className='footer-links'>Tel: 070600370</a>
                            </li> */}
                        </ul>
                  </li>
              </ul>
          </footer>
      )
  }


export default Footer;