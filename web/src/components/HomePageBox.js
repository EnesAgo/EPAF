import React from 'react'
import '../css/Components.css'

function HomePageBox({imgUrl, imgAlt, title, paragraph, button="bottun"}) {
      return (
            <div className="home-page-box">
                <img src={imgUrl} alt={imgAlt} />
                    <div>
                        <h3>{title}</h3> <br />
                        <p>{paragraph}</p>
                        <br /><br />
                        <button>{button}</button>
                    </div>
            </div>
      )
  }


export default HomePageBox;