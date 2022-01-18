import React, { useState } from 'react';
import '../css/Nav.css'
import { Link } from 'react-router-dom';

function Nav() {  

    const [acti, setActi] = useState("");

    const changeActi = () => {
      if(acti === ""){
        setActi("acti")
      }
      else{
        setActi("")
      }
    }
  
    return(

        <header className="header">
          <nav>
                <li className="firstLi">
                    {/* <h3>LOGO</h3> */}
                    <img src="images/EPAF_LOGO.png" alt="LOGO" className='logo' />

                    <span id="openNav" className="menubut" onClick={changeActi}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </li>
                <li className={`secLi ${acti}`}>
                    <ul className="navbar">
                        <li>
                            <Link className="links" to="/">Home</Link>
                        </li>
                        <li>
                            <Link className="links" to="/about" >About Us</Link>
                        </li>
                        <li>
                            <Link className="links" to="/CleanUps" >CleanUps</Link>
                        </li>
                        <li>
                            <Link className="links" to="/report" >Report Pollution</Link>
                        </li>
                        <li>
                            <Link className="links" to="/" >Water Purification</Link>
                        </li>
                        <li>
                            <Link className="links" to="/TripSuggestion">
                                <div className="forum">
                                    <h4>Trip Suggestion</h4>
                                </div>
                            </Link>
                        </li>

                    </ul>
                </li>

            </nav>
          </header>
    );
  }


export default Nav;