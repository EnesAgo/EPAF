import React from 'react'
import '../css/Components.css'
import HomePageSliderBox from './HomePageSliderBox';

function HomeSlider() {
    return (
        <div className='homeslider d-flex'>
          <button className='specialButton'>
            <h3>←</h3>
          </button>

          <ul className='sliderMain d-flex justc-space-b'>
            <li>
              <HomePageSliderBox imgUrl='https://ykcstruga9aclasses.000webhostapp.com/user.PNG' imgAlt='asd' title="title" paragraph='paragraph' link="/" />
            </li>
            <li>
              <HomePageSliderBox imgUrl='https://ykcstruga9aclasses.000webhostapp.com/user.PNG' imgAlt='asd' title="title" paragraph='paragraph' link="/" />
            </li>
            <li>
              <HomePageSliderBox imgUrl='https://ykcstruga9aclasses.000webhostapp.com/user.PNG' imgAlt='asd' title="title" paragraph='paragraph' link="/" />
            </li>
          </ul>

          <button className='specialButton'>
            <h3>→</h3>
          </button>
        </div>
    )
  }


export default HomeSlider;