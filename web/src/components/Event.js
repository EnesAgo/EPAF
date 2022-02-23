import React, { useEffect, useState } from 'react'
import './../css/Events.css'
import {Link} from 'react-router-dom'
import useWindowSizeOnce from './../hooks/useWindowSizeOnce'

function Event({time, place, des, img, id, counter}) {
    const [butTxt, setButTxt] = useState('click to open map');
    const {width} = useWindowSizeOnce();

    useEffect(() => {
        if(width < 1000){
            setButTxt("click")
        }
    }, [])


      return (
          <Link to={`/CleanUps/${id}`}>
          <div className='event d-flex'>
              <span className="eventSpan">
                <img src={`data:image/jpeg;base64,${img}`} alt={des} />
              </span>
              <div className="des d-flex">
                  <h2>Location: {place}</h2>
                  <h2>Date: {time}</h2>
                  <h2>Description: </h2><span>{des}</span>
              </div>
              <div className="counter">
                  <h2>Interested People: {counter}</h2>
              </div>
          </div>
          </Link>
      )
  }


export default Event;