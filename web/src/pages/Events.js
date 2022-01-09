import React, { useEffect, useState, useContext } from 'react';
import '../css/Events.css';
import Event from '../components/Event';
import { Eventcontext } from './../contexes/Eventcontext';
import {pushToArr} from './../hooks/useArrayIndividually';

function Events() {

    const val = useContext(Eventcontext)

    const [fetchData, setFetchData] = useState(val);
    const [cityNames, setCityNames] = useState([]);

    const apiKey = 'pk.e60db13bfd447b7c4fcfb840d8dcc7f8';
    // const lat = 41.17740306631534;
    // const lng = 20.676420740783215;

    async function getCity(lat, lng, id) {
        const url = `https://us1.locationiq.com/v1/reverse.php?key=${apiKey}&lat=` + lat + "&lon=" + lng + "&format=json";
    
            const response = await fetch(url)
            const resData = await response.json();

            const dataToPush = {
                id: id,
                data: resData,
                // placeName: ((resData.address.city || resData.address.town) || resData.address.village) || "",
                // state: resData.address.state
            }

        pushToArr(dataToPush, setCityNames)
        console.log(cityNames)
    }

    async function getData() {
        const response = await fetch('https://EPAFbackend.agoenes.repl.co/post');
        const resData = await response.json();

        setFetchData(resData)
        console.log(resData)
        console.log(cityNames)
    }

    useEffect(()=>{
        getData();
        }, []);

        useEffect(() => {
            console.log(cityNames)
        }, [cityNames])

      return (
          <div className='events'>

                {fetchData ? 
                    fetchData.map(e => <Event key={e._id} img={e.encodedImg} des={e.description} lat={e.lat} lon={e.lon} id={e._id} />)
                    : <h1>loading...</h1>}
          </div>
      )
  }


export default Events;