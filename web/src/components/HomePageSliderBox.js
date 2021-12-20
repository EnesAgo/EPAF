import React from 'react';
import '../css/Components.css';
import { Link } from 'react-router-dom';

function HomePageSliderBox({animationClass, style, imgUrl, imgAlt, title, paragraph, link}) {
      return (
            <div className={`home-page-slider-box ${animationClass}`} style={style}>
                <img src={imgUrl} alt={imgAlt} />
                    <div>
                        <h3>{title}</h3> <br />
                        <p>{paragraph}</p>
                        <br /><br />
                        <Link to={link} className='HomeNav'>Read More</Link>
                    </div>
            </div>
      )
  }


export default HomePageSliderBox;