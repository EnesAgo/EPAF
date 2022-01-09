import React from 'react'

function TripSuggestion({title, sendFrom, des, img, lon, lat, placeName, likes}) {
      return (
          <a href={`https://maps.google.com/?q=${lat},${lon}`} target="_blank">
             <div className='event d-flex'>
              <img src={`data:image/jpeg;base64,${img}`} alt={des} />
              <div className="des d-flex">
                  <h2>{title}</h2>
                  <h3>{placeName}</h3>
                  <p>{des}</p>
              </div>
              <div className="likes">
                  <h3>{sendFrom}</h3>

                  <div>
                    <img src="/images/likeIcon.svg" alt="like icon" className='likeIcon' /> <span>{likes}</span>
                  </div>
              </div>
          </div>
          </a>
      )
  }


export default TripSuggestion;