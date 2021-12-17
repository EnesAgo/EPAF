import React from 'react'
import '../css/Home.css'
import {Link} from 'react-router-dom';

function Home() {
      return (
          <div className="home">
              <ul className='home-ul'>
                <li className='home-li'>
                    <div className='info'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
                        Sapiente voluptas aliquam dolor assumenda, odio recusandae ducimus asperiores, <br />
                        perferendis alias unde tempore debitis commodi aut, <br />
                        necessitatibus praesentium pariatur minus dolorum doloremque. <br /> <br />
                        <Link className='read-more' to="/" >Read More</Link>
                    </div>
                </li>
                <li className='home-li'>
                        asd
                </li>
              </ul>
          </div>
      )
  }


export default Home;