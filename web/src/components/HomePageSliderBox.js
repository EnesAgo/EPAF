import React from 'react';
import '../css/Components.css';
import { Link } from 'react-router-dom';

function HomePageSliderBox({animationClass, style, imgUrl, imgAlt, title, paragraph, link}) {
    const styles={
        maxWidth: "250px",
        marginBottom: "20px"
    }
      return (
            <div className={`home-page-slider-box ${animationClass}`} style={style}>
                <img src={imgUrl} alt={imgAlt} />
                    <div>
                        <h3 style={styles}>{title}</h3> 
                        <p style={styles}>{paragraph}</p>
                        {/* <br /> */}
                        <Link to={link} className='HomeNav'>Read More</Link>
                    </div>
            </div>
      )
  }


export default HomePageSliderBox;