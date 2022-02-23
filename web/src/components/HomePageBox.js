import React from 'react'
import { Link } from 'react-router-dom';
import '../css/Components.css'

function HomePageBox({imgUrl, imgAlt, title, paragraph, url, button="bottun"}) {
    const styles = {
        color:"#000"
    }
      return (
            <Link to={url} style={styles} className="home-page-box">
                <img src={imgUrl} alt={imgAlt} />
                    <div>
                        <h3>{title}</h3> <br />
                        {/* <p>{paragraph}</p> */}
                        {/* <br /><br /> */}
                        {/* <button>{button}</button> */}
                    </div>
            </Link>
      )
  }


export default HomePageBox;