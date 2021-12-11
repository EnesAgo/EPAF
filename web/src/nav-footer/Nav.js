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

        <div className="header">
          <ul>
                <li className="firstLi">
                    <h3>LOGO</h3>
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
                            <Link className="links" to="/" >About</Link>
                        </li>
                        <li>
                            <Link className="links" to="/" >Events</Link>
                        </li>
                        <li>
                            <Link className="links" to="/" >Report Pollution/Fire</Link>
                        </li>
                        <li>
                            <Link className="links" to="/" >Water Purification</Link>
                        </li>
                        <li>
                            <Link className="links" to="/">
                                <div className="forum">
                                    <h4>Forum</h4>
                                </div>
                            </Link>
                        </li>

                    </ul>
                </li>

            </ul>
          </div>
    );
  }


export default Nav;