import React from 'react'
import '../css/Footer.css'
import { Link } from 'react-router-dom';


function Footer() {
      return (
          <div className='footer'>
              <ul className='footer-division'>
                  <li className='footer-division-li'>
                        <h3>EPAF</h3>
                        <ul>
                            <li>
                                <Link className="footer-links" to="/">Home</Link>
                            </li>
                            <li>
                              <Link className="footer-links" to="/" >About</Link>
                            </li>
                            <li>
                                <Link className="footer-links" to="/" >Events</Link>
                            </li>
                            <li>
                                <Link className="footer-links" to="/" >Report Pollution/Fire</Link>
                            </li>
                            <li>
                                <Link className="footer-links" to="/" >Water Purification</Link>
                            </li>
                            <li>
                                <Link className="footer-links" to="/" >Forum</Link>
                            </li>
                        </ul>
                  </li>
                  <li className='footer-division-li'>
                        <h3>Our Partners and Sponsors</h3>
                        <ul>
                            <li>
                                <a href="https://www.lcwaikiki.com/" className='footer-links'>Lc Waikiki</a>
                            </li>
                            <li>
                                <a href="/" className='footer-links'>Partner</a>
                            </li>
                            <li>
                                <a href="/" className='footer-links'>Sponsor</a>
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
                                <a href="mailto:enesago010@gmail.com" className='footer-links'>Stefan Dishliovski: stefand@gmail.com</a>
                            </li>
                            <li>
                                <a href="tel:070600370" className='footer-links'>Tel: 070600370</a>
                            </li>
                        </ul>
                  </li>
              </ul>
          </div>
      )
  }


export default Footer;