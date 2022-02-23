import React from 'react'
import '../css/Home.css'
import {Link} from 'react-router-dom';
import HomePageBox from '../components/HomePageBox';
import HomeSlider from '../components/HomeSlider';

function Home() {
    const fullWidth = {
        width: "100%"
    }
      return (
          <div className="home">
              <ul className='home-ul'>
                  <li className='home-li'>
                    <div className="firstDiv">
                        <p className='firstDiv-txt'>
                            EPAF stands for Environmental Protection and Awareness of Forests. <br /> 
                            It is an environmentaly friendly application. The perpous of this <br />
                            application is to save the mountains and forests from pollution <br />
                            and provide people healthy environments.
                            <br />
                            <Link to="/about">Read more</Link>
                        </p>
                        <img src='images/EPAF_LOGO.png' width={"350px"} alt="img" className='firstDiv-img' />
                    </div>
                  </li>
                <li className='home-li'>
                    <div className='midDiv'>
                        <h3>Explanation of features</h3>
                        <ul>
                            <li>
                                <HomePageBox url="/CleanUps" imgUrl="https://images-ext-1.discordapp.net/external/LzIwFDsWK535BZmekN-KK9Em52BoH923-deIjJ0sDBw/http/www.brsmeas.org/Portals/2/images/news/Mountains_plastic.jpg" imgAlt='pollutionImage' title="Pollution Report Feature"  />                            
                            </li>
                            <li>
                                <HomePageBox url="TripSuggestion" imgUrl='https://cdn.discordapp.com/attachments/915935569660477440/940298546840735816/tripsuggestion.jpg' imgAlt='https://cdn.discordapp.com/attachments/915935569660477440/940298546840735816/tripsuggestion.jpg' title="Trip Suggestions" />
                            </li>
                        </ul>
                    </div>
                </li>
                <li className='home-li last-li'>
                    <div className='lastDiv'>
                        <div className='info'>
                            <br />
                            Scroll down and read our informative articles
                            <br />
                            {/* <Link className='read-more' to="/about" >Read More</Link> */}
                        </div>
                        <div style={fullWidth}>
                            <HomeSlider />
                        </div>
                    </div>
                </li>
              </ul>
          </div>
      )
  }


export default Home;