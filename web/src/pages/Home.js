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
                            What is EPAF? <br />
                            EPAF offers awarness <br />
                            and protects the <br />
                            enviroment from<br />
                            polution and wild fires...
                        </p>
                        <img src='images/HomePageImg.jpeg' alt="img" className='firstDiv-img' />
                    </div>
                  </li>
                <li className='home-li'>
                    <div className='midDiv'>
                        <h3>Explanation of features</h3>
                        <ul>
                            <li>
                                <HomePageBox imgUrl='https://ykcstruga9aclasses.000webhostapp.com/user.PNG' imgAlt='asd' title="title" paragraph='paragraph' button="button" />
                            </li>
                            <li>
                                <HomePageBox imgUrl='https://ykcstruga9aclasses.000webhostapp.com/user.PNG' imgAlt='asd' title="title" paragraph='paragraph' button="button" />
                            </li>
                        </ul>
                    </div>
                </li>
                <li className='home-li last-li'>
                    <div className='lastDiv'>
                        <div className='info'>
                            <br />
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
                            Sapiente voluptas aliquam dolor assumenda, odio recusandae ducimus asperiores, <br />
                            perferendis alias unde tempore debitis commodi aut, <br />
                            necessitatibus praesentium pariatur minus dolorum doloremque. <br /> <br />
                            <Link className='read-more' to="/" >Read More</Link>
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