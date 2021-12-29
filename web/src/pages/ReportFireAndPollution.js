import React, { useEffect, useState } from 'react'
import '../css/ReportFireAndPollution.css'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import ReportForm from '../components/ReportForm';
import useWindowSizeOnce from './../hooks/useWindowSizeOnce'


function base64(file, callback){
  //https://stackoverflow.com/questions/6150289/how-can-i-convert-an-image-into-base64-string-using-javascript
  var coolFile = {};
  
  function readerOnload(e){
    var base64 = btoa(e.target.result);
    coolFile.base64 = base64;
    callback(coolFile)
  };

  var reader = new FileReader();
  reader.onload = readerOnload;

  // var file = file;
  coolFile.filetype = file.type;
  coolFile.size = file.size;
  coolFile.filename = file.name;
  reader.readAsBinaryString(file);
}



function ReportFireAndPollution() {

   const [fileData, setFileData] = useState();
   const [descriptionData, setDescriptionData] = useState();
   const [markerCoords, setMarkerCoords] = useState({lat: 0, lon: 0});
   const [encodedFile, setEncodedFile] = useState("");

   const [mapWidth, setMapWidth] = useState("800px");
   const [mapHeight, setMapHeight] = useState("400px");
   const {width, height} = useWindowSizeOnce();

    console.log(width)
   
   const jsondata = {
     lat: markerCoords.lat,
     lon: markerCoords.lon,
    //  image: fileData,
     description: descriptionData,
     encodedFile: encodedFile,
    //  fullEncodedFile: `data:image/jpeg;base64,${encodedFile}`
   }

   const opstions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify(jsondata)
};

async function PosttoApi() {
  const response = await fetch('http://localhost:3001/post', opstions);
  const resData = await response.json();

  console.log(JSON.stringify(jsondata))

  console.log(resData)
}

   function getFileData(e) {
      const files = Array.from(e.target.files)
      console.log("files:", files)
      const file = files[0];
      console.log(file)
      setFileData(file) 

      base64( file, function(data){
        console.log(data.base64)
      setEncodedFile(data.base64)

      })


      // imageRef.current.src = `data:image/jpeg;base64,${encodedFile}`
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
    
      useEffect(async () => {
        const response = await fetch("https://epafbackend.agoenes.repl.co/post/0");
        const data = await response.json()

        console.log(data)
      },[])

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

      useEffect(() => {
      if(width < 500){
        setMapWidth('80%');
        setMapHeight(`${width - ((width*80/100)/2)}px`)
      console.log(width - ((width*80/100)/2))

      }
      else if(width < 600){
        setMapWidth('400px');
        setMapHeight(`${(width*80/100)/2}px`)
      console.log(width - ((width*80/100)/2))

      }
      else if(width < 800){
        setMapWidth('600px');
        setMapHeight('300px')
      }
      }, [])


      
      const containerStyle = {
        width: mapWidth,
        height: mapHeight,
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
                  <ReportForm getFileDataFunction={getFileData} getDescriptionDataFunction={getDescriptionData} buttonOnClick={PosttoApi} />
                </div>
                {/* <img ref={imageRef} src={`data:image/jpeg;base64,${encodedFile}`} alt="Red dot" /> */}
              </div>

              
          </div>
      )
  }


export default ReportFireAndPollution;