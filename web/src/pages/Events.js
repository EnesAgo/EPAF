import React, { useEffect, useState, useContext } from 'react'
import '../css/Events.css'
import Event from '../components/Event';
import {Eventcontext} from './../contexes/Eventcontext'

function Events() {

    const val = useContext(Eventcontext)

    const [fetchData, setFetchData] = useState(val);

    const apiKey = 'pk.e60db13bfd447b7c4fcfb840d8dcc7f8';
    const lat = 40.714224;
    const lng = -73.961452;

    async function getCity() {
        const url = `https://us1.locationiq.com/v1/reverse.php?key=${apiKey}&lat=` + lat + "&lon=" + lng + "&format=json";
    
    
        // const response = await fetch(`http://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&sensor=true&key=${apiKey}`);
        const response = await fetch(url)
        const resData = await response.json();
        console.log(resData)}

    async function getData() {
        const response = await fetch('https://EPAFbackend.agoenes.repl.co/post');
        const resData = await response.json();

        setFetchData(resData)
        console.log(resData)
    }

    useEffect(()=>{
        getData();
        getCity();
        }, []);

      return (
          <div className='events'>

                {fetchData ? 
                    fetchData.map(e => <Event key={e._id} img={e.encodedImg} des={e.description} lat={e.lat} lon={e.lon} id={e._id} />)
                    : <h1>loading...</h1>}
          </div>
      )
  }


export default Events;