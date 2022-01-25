import React, { useEffect, useState, useContext } from 'react';
import '../css/Events.css';
import Event from '../components/Event';
import { Eventcontext } from './../contexes/Eventcontext';

function Events() {

    const val = useContext(Eventcontext)

    const [fetchData, setFetchData] = useState(val);
    // const [cityNames, setCityNames] = useState([]);

    async function getData() {
        const response = await fetch('https://EPAFbackend.agoenes.repl.co/post');
        const resData = await response.json();

        setFetchData(resData)
        console.log(resData)
        // console.log(cityNames)
    }

    useEffect(()=>{
        getData();
        }, []);

        // useEffect(() => {
        //     console.log(cityNames)
        // }, [cityNames])

      return (
          <div className='events'>

                {fetchData ? 
                    fetchData.map(e => <Event counter={e.interestedPeople} key={e._id} place={e.place} time={e.dateTime} img={e.encodedImg} des={e.description} lat={e.lat} lon={e.lon} id={e._id} />)
                    : <h1>loading...</h1>}
          </div>
      )
  }


export default Events;