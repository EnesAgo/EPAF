import React, { useEffect, useState } from 'react'
import '../css/ReportFireAndPollution.css'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import ReportForm, { getFileData, getSelectData, getDescriptionData } from '../components/ReportForm';


function ReportFireAndPollution() {

   const [fileData, setFileData] = useState()
   const [selectData, setSelectData] = useState()
   const [descriptionData, setDescriptionData] = useState()

   function getFileData(e) {
      const files = Array.from(e.target.files)
      console.log("files:", files)
      const file = files[0];
      console.log(file)
      setFileData(file)
    } 

    function getSelectData(e) {
      console.log(e.target)
      const {name, value} = e.target;

      setSelectData({name, value})
    }

    function getDescriptionData(e) {
      console.log(e.target.value)

      setDescriptionData(e.target.value)

    }

    /* GOOGLE MAP */

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
          }, 500);

        //   console.log(markerCoords)

      },[])

      const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyA3mXnn3_ZwQEzJQphiMpnW7YZZZk6Yal4   '
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

      const containerStyle = {
        width: '800px',
        height: '400px',
        margin: "20px 0",
      };

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

                <div className="reportFormContainer">
                  <ReportForm getFileDataFunction={getFileData} getSelectDataFunction={getSelectData} getDescriptionDataFunction={getDescriptionData} />
                  {/* <button onClick={() => console.log(descriptionData)}>asdasdsad</button> */}
                </div>
              </div>

              
          </div>
      )
  }


export default ReportFireAndPollution;