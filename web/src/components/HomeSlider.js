import React, { useEffect, useState } from 'react'
import '../css/Components.css'
import useArray from '../hooks/useArray';
import useWindowSize from '../hooks/useWindowSize';
import HomePageSliderBox from './HomePageSliderBox';


function HomeSlider() {

  const {width} = useWindowSize();

  const [animation, setAnimation] = useState('SliderAnimationOpen')

  const [isWindowSmall, setIsWindowSmall] = useState('flex');

  const {array, update} = useArray([0,1,2])

  // useTimeout(() => setAnimation('SliderAnimationClose'), 1000);
  // useTimeout(() => setAnimation('SliderAnimationOpen'), 2000);

  useEffect(() => {
    if(Number(width) < 1000){
      setIsWindowSmall("none")
    } else{
      setIsWindowSmall("flex")
    }
  }, []);

  const data = [
    {
      imgUrl: 'https://ykcstruga9aclasses.000webhostapp.com/user.PNG',
      imgAlt: 'first',
      title: 'first title',
      paragraph: 'paragraph',
      link: '/'
    },
    {
      imgUrl: 'https://ykcstruga9aclasses.000webhostapp.com/user.PNG',
      imgAlt: 'sec',
      title: 'sec title',
      paragraph: 'paragraph',
      link: '/'
    },
    {
      imgUrl: 'https://ykcstruga9aclasses.000webhostapp.com/user.PNG',
      imgAlt: 'third',
      title: 'third title',
      paragraph: 'paragraph',
      link: '/'
    },
    {
      imgUrl: 'https://ykcstruga9aclasses.000webhostapp.com/user.PNG',
      imgAlt: 'fourth',
      title: 'fourth title',
      paragraph: 'paragraph',
      link: '/'
    },
    {
      imgUrl: 'https://ykcstruga9aclasses.000webhostapp.com/user.PNG',
      imgAlt: 'fifth',
      title: 'fifth title',
      paragraph: 'paragraph',
      link: '/'
    }
  ];
  
  const deleteUnWanted = {
    display: isWindowSmall
  }


  function goRight() {
    // useTimeout(() => setAnimation('SliderAnimationClose'), 1000);

    // setTimeout(() => {
      setAnimation('SliderAnimationClose')
    // }, 0);

    setTimeout(() => {
      if(array[0] < data.length-1){
        update(0, array[0]+1);
      }
      else{
        update(0, 0);
      }
  
      if(array[1] < data.length-1){
        update(1, array[1]+1);
      }
      else{
        update(1, 0);
      }
  
      if(array[2] < data.length-1){
        update(2, array[2]+1);
      }
      else{
        update(2, 0);
      }
    }, 500);

    setTimeout(() => {
      setAnimation('SliderAnimationOpen')
    }, 1000);
    
  }

  function goLeft() {
    // useTimeout(() => setAnimation('SliderAnimationClose'), 1000);

    // setTimeout(() => {
      setAnimation('SliderAnimationClose')
    // }, 0);

    setTimeout(() => {
      if(array[0] > 0){
        update(0, array[0]-1);
      }
      else{
        update(0, data.length-1);
      }
  
      if(array[1] > 0){
        update(1, array[1]-1);
      }
      else{
        update(1, data.length-1);
      }
  
      if(array[2] > 0){
        update(2, array[2]-1);
      }
      else{
        update(2, data.length-1);
      }
    }, 500);

    setTimeout(() => {
      setAnimation('SliderAnimationOpen')
    }, 1000);
    
  }

    return (
        <div className='homeslider d-flex'>
          
          <button onClick={goLeft} className='specialButton'>
            <h3>←</h3>
          </button>

          <ul className='sliderMain d-flex justc-space-b'>
            <li>
              <HomePageSliderBox animationClass={`${animation}`} style={deleteUnWanted} imgUrl={data[array[0]].imgUrl} imgAlt={data[array[0]].imgAlt} title={data[array[0]].title} paragraph={data[array[0]].paragraph} link={data[array[0]].link} />
            </li>
            <li>
              <HomePageSliderBox animationClass={`${animation}`} imgUrl={data[array[1]].imgUrl} imgAlt={data[array[1]].imgAlt} title={data[array[1]].title} paragraph={data[array[1]].paragraph} link={data[array[1]].link} />
            </li>
            <li>
              <HomePageSliderBox animationClass={`${animation}`} style={deleteUnWanted} imgUrl={data[array[2]].imgUrl} imgAlt={data[array[2]].imgAlt} title={data[array[2]].title} paragraph={data[array[2]].paragraph} link={data[array[2]].link} />
            </li>
          </ul>

          <button onClick={goRight} className='specialButton'>
            <h3>→</h3>
          </button>

        </div>
    )
  }


export default HomeSlider;