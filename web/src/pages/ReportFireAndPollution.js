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
   const [placeData, setPlaceData] = useState();
   const [dateData, setDateData] = useState();
   const [markerCoords, setMarkerCoords] = useState({lat: 0, lon: 0});
   const [encodedFile, setEncodedFile] = useState("");

   const [mapWidth, setMapWidth] = useState("800px");
   const [mapHeight, setMapHeight] = useState("400px");
   const {width, height} = useWindowSizeOnce();

    console.log(width)
   
   const jsondata = {
     lat: markerCoords.lat,
     lon: markerCoords.lon,
     dateTime: dateData,
     place: placeData,
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
  const response = await fetch('https://EPAFbackend.agoenes.repl.co/post', opstions);
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

    function getPlaceFunction(e) {
      console.log(e.target.value)

      setPlaceData(e.target.value)
    }

    function getTimeFunction(e) {
      console.log(e.target.value)
      const text = e.target.value;
      const myArray = text.split("T");
      let leftPart = myArray[0].split("-");
      let a,b,c;
      a=leftPart[0];
      b=leftPart[1];
      c=leftPart[2];

      leftPart=[c,b,a].join(".");


      const rightPart = myArray[1]

      const finalTxt = `${leftPart} - ${rightPart}`
      console.log(finalTxt)
      

      setDateData(finalTxt);
    }

    /* GOOGLE MAP */

    const [center, setCenter] = useState(
        {
            lat: 41.5,
            lng: 22
        }
      )
    
      useEffect(async () => {
        const response = await fetch("https://epafbackend.agoenes.repl.co/post/");
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
        margin: "20px 0",
      };

      return (
          <div className='reportFireAndPollution'>

              <div className="firstDiv">
                  <h3>Report Pollution</h3>
                  <div className='firstDivDivision'>
                    <p>
                      In the Pollution Report section, the user can enter some location on the map. <br />
                      Also they can take photo of the pollution and write description of the problem. <br />
                      It is also important so select a date and time of the CleanUp. When they are ready, <br />
                      they can submit and the problem will become an event for other users to gather <br />
                      and clean the area.
                    </p>
                    <img src="https://images-ext-1.discordapp.net/external/LzIwFDsWK535BZmekN-KK9Em52BoH923-deIjJ0sDBw/http/www.brsmeas.org/Portals/2/images/news/Mountains_plastic.jpg" style={{width: "275px"}} alt="just and image" />
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
                  <ReportForm getPlaceFunction={getPlaceFunction} getTimeFunction={getTimeFunction} getFileDataFunction={getFileData} getDescriptionDataFunction={getDescriptionData} buttonOnClick={PosttoApi} />
                </div>
                {/* <img ref={imageRef} src={`data:image/jpeg;base64,${encodedFile}`} alt="Red dot" /> */}
              </div>

              
          </div>
      )
  }


export default ReportFireAndPollution;