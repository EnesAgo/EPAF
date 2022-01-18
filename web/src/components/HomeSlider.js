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
      imgUrl: 'https://images-ext-2.discordapp.net/external/0NmEzpmh_KYyA8t3pIH3ngryWefUN31t_YamBMXX_Zo/%3Fwidth%3D620%26quality%3D85%26auto%3Dformat%26fit%3Dmax%26s%3D06a3393af136cf4aa6256bdf49f3ee30/https/i.guim.co.uk/img/media/41868c6e9f5bbb94ded9b3c9bc956a9bffe59d27/0_0_3000_1688/master/3000.jpg',
      imgAlt: 'https://images-ext-2.discordapp.net/external/0NmEzpmh_KYyA8t3pIH3ngryWefUN31t_YamBMXX_Zo/%3Fwidth%3D620%26quality%3D85%26auto%3Dformat%26fit%3Dmax%26s%3D06a3393af136cf4aa6256bdf49f3ee30/https/i.guim.co.uk/img/media/41868c6e9f5bbb94ded9b3c9bc956a9bffe59d27/0_0_3000_1688/master/3000.jpg',
      title: 'The hills are alive with the signs of plastic',
      paragraph: 'Major study finds microplastics in soil across Switzerland and scientists warn urgent research....',
      link: '/The-hills-are-alive-with-the-signs-of-plastic'
    },
    {
      imgUrl: 'https://images-ext-2.discordapp.net/external/n5JTlHzD1HI-GWbklxi-3VdG_lA2LLrvTn30FecnTHU/https/www.conserve-energy-future.com/wp-content/uploads/2021/06/grabage-pile-at-landfill-site.webp',
      imgAlt: 'https://images-ext-2.discordapp.net/external/n5JTlHzD1HI-GWbklxi-3VdG_lA2LLrvTn30FecnTHU/https/www.conserve-energy-future.com/wp-content/uploads/2021/06/grabage-pile-at-landfill-site.webp',
      title: 'What is Land Pollution?',
      paragraph: 'When we talk about air or water pollution, the reactions garnered are stronger.',
      link: '/What-is-Land-Pollution'
    },
    {
      imgUrl: 'https://images-ext-2.discordapp.net/external/IBa51033fayi2cHywvXWKhME9U4wcTdH0cWQQZ7NrTA/https/www.nicepng.com/png/full/106-1062633_scroll-down-stream-water-png.png?width=800&height=368',
      imgAlt: 'https://images-ext-2.discordapp.net/external/IBa51033fayi2cHywvXWKhME9U4wcTdH0cWQQZ7NrTA/https/www.nicepng.com/png/full/106-1062633_scroll-down-stream-water-png.png?width=800&height=368',
      title: 'Risks Of Drinking Stream Water',
      paragraph: "You're hiking and you see a clear stream with what seems to be drinkable water. The question is, do you drink it?",
      link: '/Risks-Of-Drinking-Stream-Water'
    },
    {
      imgUrl: 'https://images-ext-1.discordapp.net/external/yiKq5ti__DSX1l8Jxuu3IRzandJXj-UXi-iZ66iNXMg/https/www.mountaineering.scot/assets/contentimages/WP12-11548-20160610141210.jpeg?width=800&height=336',
      imgAlt: 'https://images-ext-1.discordapp.net/external/yiKq5ti__DSX1l8Jxuu3IRzandJXj-UXi-iZ66iNXMg/https/www.mountaineering.scot/assets/contentimages/WP12-11548-20160610141210.jpeg?width=800&height=336',
      title: 'Water-borne infections',
      paragraph: 'Mountains of Scotland above human habitation, the water is safe to drink, but you do have to think about where it is coming from and follow basic common sense rules.',
      link: '/Water-borne-infections'
    }
  ];
  
  const deleteUnWanted = {
    display: isWindowSmall
  }
  const deleteUnWantedAndThird = {
    // display: isWindowSmall
     display: "none"
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
              <HomePageSliderBox animationClass={`${animation}`} style={deleteUnWantedAndThird} imgUrl={data[array[2]].imgUrl} imgAlt={data[array[2]].imgAlt} title={data[array[2]].title} paragraph={data[array[2]].paragraph} link={data[array[2]].link} />
            </li>
          </ul>

          <button onClick={goRight} className='specialButton'>
            <h3>→</h3>
          </button>

        </div>
    )
  }


export default HomeSlider;