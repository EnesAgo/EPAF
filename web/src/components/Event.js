import React, { useEffect, useState } from 'react'
import './../css/Events.css'
import {Link} from 'react-router-dom'
import useWindowSizeOnce from './../hooks/useWindowSizeOnce'

function Event({lat, lon, des, img, id}) {
    const [butTxt, setButTxt] = useState('click to open map');
    const {width} = useWindowSizeOnce();

    useEffect(() => {
        if(width < 1000){
            setButTxt("click")
        }
    }, [])


      return (
          <Link to={`/events/${id}`}>
          <div className='event d-flex'>
              <img src={`data:image/jpeg;base64,${img}`} alt={des} />
              <div className="des d-flex">
                  <h2>Location: {}</h2>
                  <h2>Description: </h2><span>{des}</span>
              </div>
              <div className="counter">
                  counter
              </div>
          </div>
          </Link>
      )
  }


export default Event;