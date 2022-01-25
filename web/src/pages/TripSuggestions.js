import React, { useState, useEffect, useContext } from 'react'
import TripSuggestion from '../components/TripSuggestion';
import './../css/TripSuggestions.css';
import { TripSuggestioncontext } from './../contexes/TripSuggestionscontext';
import { Link } from 'react-router-dom';


function TripSuggestions() {

    const val = useContext(TripSuggestioncontext)

    const [fetchData, setFetchData] = useState(val);

    async function getData() {
        const response = await fetch('https://EPAFbackend.agoenes.repl.co/TripSuggestion');
        const resData = await response.json();

        setFetchData(resData)
        console.log(resData)
    }

    useEffect(()=>{
        getData();
        }, []);
   
      return (
          <div className='tripsuggestions'>
              <br />
              <div className="tripTitle">
                <p>
                In this section the users can se recommendations of places other users have visited. Also every user can post a suggestion of some place. To post a Suggestion click on "Post a Suggestion" button.
                </p>
                
                <br />
                <Link to="/submitToTripSuggestions">
                    <div className="linkForNewTripSuggestion">
                        <h4>Post A Suggestion</h4>
                    </div>
                </Link>
              </div>


                {fetchData ? 
                fetchData.map(e => 
                    <TripSuggestion key={e._id} id={e._id} lat={e.lat} lon={e.lon} likes={e.likes} title={e.title} placeName={e.place} des={e.description} sendFrom={e.sendFrom} img={e.encodedImg}  /> )
                :
                <h1>Loading...</h1>}

          </div>
      )
  }


export default TripSuggestions;