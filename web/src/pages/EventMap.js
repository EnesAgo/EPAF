import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Eventcontext } from './../contexes/Eventcontext';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import useWindowSizeOnce from '../hooks/useWindowSizeOnce';
import './../css/EventMap.css'


function EventMap() {

    const {width, height} = useWindowSizeOnce();

    const [mapWidth, setMapWidth] = useState("800px");
    const [mapHeight, setMapHeight] = useState("400px");

    const {id} = useParams();
    const val = useContext(Eventcontext)

    const [fetchData, setFetchData] = useState(val)

    const [objIndex, setObjIndex] = useState(val ? val.findIndex(obj => obj._id == id) : 0);
    
    const [idForPost, setIdForPost] = useState(val ? val[val.findIndex(obj => obj._id == id)]._id : "abc")


    const [center, setCenter] = useState(
        {
            // lat: fetchData ? fetchData.lat : 0,
            // lng: fetchData ? fetchData.lon : 0
            lat: fetchData ? fetchData[objIndex].lat: 0,
            lng: fetchData ? fetchData[objIndex].lon : 0
        }
      )
      async function getData() {
        const response = await fetch('https://EPAFbackend.agoenes.repl.co/post');
        const resData = await response.json();

        setIdForPost(resData[resData.findIndex(obj => obj._id == id)]._id)
        setFetchData(resData)
        console.log(resData)
    }
 
    const opstions = {
     method: 'POST',
     headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json'
     },
     body: JSON.stringify({id: idForPost})
 };
 
    async function postToCounter() {
      if(localStorage.getItem("epafIsInterested") == 'false' || localStorage.getItem("epafIsInterested") == undefined || localStorage.getItem("epafIsInterested") == null || !localStorage.getItem("epafIsInterested")){
        const response = await fetch('https://EPAFbackend.agoenes.repl.co/interestedPeople', opstions);
        const resData = await response.json();
        console.log(resData)


        localStorage.epafIsInterested = true
      getData();
      alert("✔️")

      }
      else{
      getData();

      }
    
    }

    useEffect(()=>{
        getData();
        }, []);
      useEffect(() => {
        if(fetchData){
        setCenter({
          lat: fetchData[objIndex].lat,
          lng: fetchData[objIndex].lon
        })}
      }, [fetchData])

      useEffect(() => {
      console.log(fetchData)
      setFetchData(val)
      setObjIndex(val ? val.findIndex(obj => obj._id == id) : 0)
      val ? console.log(val.findIndex(obj => obj._id == id)) : console.log(null)

      if(val){
        setCenter({
          lat: val[val.findIndex(obj => obj._id == id)].lat,
          lng: val[val.findIndex(obj => obj._id == id)].lon
        })
        setIdForPost(val[val.findIndex(obj => obj._id == id)]._id)
      }

      }, [fetchData, val])

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyA3mXnn3_ZwQEzJQphiMpnW7YZZZk6Yal4'
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

      useEffect(() => {
      if(width < 500){
        setMapWidth('70%');
        setMapHeight(`${width / 2}px`)
      }
      else if(width < 600){
        setMapWidth('400px');
        setMapHeight(`300px`)

      }
      else if(width < 800){
        setMapWidth('600px');
        setMapHeight('350px')
      }
      }, [])
      
      const containerStyle = {
        width: mapWidth,
        height: mapHeight,
        margin: "20px 0"
      };

      return (
          <div className='eventMap'>
              {/* {obj.idNo} */}

              {isLoaded ? (
                <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={22}
                onLoad={onLoad}
                onUnmount={onUnmount}
                options={options}
                >
                { /* Child components, such as markers, info windows, etc. */ }
                <Marker position={center} />
    
                <></>
                </GoogleMap>
                ) : <></>}

                <div className="image">
                  {fetchData ? 
                  <img src={`data:image/jpeg;base64,${fetchData[objIndex].encodedImg}`} alt="some photos" /> :
                  <h1>Loading...</h1> }
                  

                  {(width>=1000 && fetchData)&&
                                <div className="informations">
                                <h3>Interested people:<span style={{fontSize:"18px", fontWeight:"500"}}>{fetchData[objIndex].interestedPeople}</span></h3> <br />
                                <h3>Location: <span style={{fontSize:"18px", fontWeight:"500"}}>{fetchData[objIndex].place}</span></h3> <br />
                                <h3>Date &#38; Time: <span style={{fontSize:"18px", fontWeight:"500"}}>{fetchData[objIndex].dateTime}</span></h3> <br />
                                <h3>Description: <span style={{fontSize:"18px", fontWeight:"500"}}>{fetchData[objIndex].description}</span></h3>
                                <br />
                                <button onClick={postToCounter} className='eventMapButton'>Be Interested</button>
                              </div>
                // <h1>Loading...</h1>
                }
                </div>


                {(width<1000 && fetchData) &&
                  <div className="informations">
                  <h3>Interested people:<span style={{fontSize:"18px", fontWeight:"500"}}>{fetchData[objIndex].interestedPeople}</span></h3> <br />
                  <h3>Location: <span style={{fontSize:"18px", fontWeight:"500"}}>{fetchData[objIndex].place}</span></h3> <br />
                  <h3>Date &#38; Time: <span style={{fontSize:"18px", fontWeight:"500"}}>{fetchData[objIndex].dateTime}</span></h3> <br />
                  <h3>Description: <span style={{fontSize:"18px", fontWeight:"500"}}>{fetchData[objIndex].description}</span></h3>
                  <br />
                  <button onClick={postToCounter} className='eventMapButton'>Be Interested</button>
                </div> 
                }


          </div>
      )
  }


export default EventMap;