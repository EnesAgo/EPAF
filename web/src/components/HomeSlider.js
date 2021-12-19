import React, { useEffect, useState } from 'react'
import '../css/Components.css'
import useWindowSize from '../hooks/useWindowSize';
import HomePageSliderBox from './HomePageSliderBox';


function HomeSlider() {

  const {width, height} = useWindowSize();

  // console.log(Number(width))

  const [isWindowSmall, setIsWindowSmall] = useState('flex');

  useEffect(() => {
    if(Number(width) < 1000){
      setIsWindowSmall("none")
    } else{
      setIsWindowSmall("flex")
    }
}, []);
  
  const deleteUnWanted = {
    display: isWindowSmall
  }

    return (
        <div className='homeslider d-flex'>
          
          <button className='specialButton'>
            <h3>←</h3>
          </button>

          <ul className='sliderMain d-flex justc-space-b'>
            <li>
              <HomePageSliderBox style={deleteUnWanted} imgUrl='https://ykcstruga9aclasses.000webhostapp.com/user.PNG' imgAlt='asd' title="title" paragraph='paragraph' link="/" />
            </li>
            <li>
              <HomePageSliderBox imgUrl='https://ykcstruga9aclasses.000webhostapp.com/user.PNG' imgAlt='asd' title="title" paragraph='paragraph' link="/" />
            </li>
            <li>
              <HomePageSliderBox style={deleteUnWanted} imgUrl='https://ykcstruga9aclasses.000webhostapp.com/user.PNG' imgAlt='asd' title="title" paragraph='paragraph' link="/" />
            </li>
          </ul>

          <button className='specialButton'>
            <h3>→</h3>
          </button>

        </div>
    )
  }


export default HomeSlider;