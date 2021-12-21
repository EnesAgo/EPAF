import React, { useEffect, useState } from 'react'
import '../css/ReportFireAndPollution.css'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '800px',
    height: '400px'
  };
  
//   var latlng = new google.maps.LatLng(41.5, 22);

function ReportFireAndPollution() {

    const [center, setCenter] = useState(
        {
            lat: 41.5,
            lng: 22
        }
      )

    const [markerCoords, setMarkerCoords] = useState({lat: 0, lon: 0})

      useEffect(() => {
          setTimeout(() => {
              setCenter({
                lat: 41.5,
                lng: 22
              })
          }, 100);

        //   console.log(markerCoords)

      },[])

      const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
      })

      const [map, setMap] = React.useState(null)
    
      const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
      }, [])
    
      const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
      }, [])

      const options = {
          disableDefaultUI: true,
          zoomControl: true
      }

      return (
          <div className='reportFireAndPollution'>

              <div className="firstDiv">
                  <h3>Report Fire and Pollution</h3>
                  <div className='firstDivDivision'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                        Saepe eum corporis ipsa dolores iusto, <br />
                        ratione excepturi voluptas maiores sunt quidem fuga <br />
                        modi dolorem id, aliquid harum? Quaerat doloribus iure reprehenderit.
                    </p>
                    <img src="/images/HomePageImg.jpeg" alt="just and image" />
                  </div>
              </div>

              <div className="secDiv">
                {isLoaded ? (
                <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={22}
                onLoad={onLoad}
                onUnmount={onUnmount}
                options={options}
                onClick={(e) => {
                    setMarkerCoords({
                        lat: e.latLng.lat(),
                        lon: e.latLng.lng()
                    })
                }}
                >
                { /* Child components, such as markers, info windows, etc. */ }

                <Marker position={{lat: markerCoords.lat, lng: markerCoords.lon}} />

                <></>
                </GoogleMap>
                ) : <></>}
              </div>

              
          </div>
      )
  }


export default ReportFireAndPollution;