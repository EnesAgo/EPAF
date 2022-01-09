import React, { useState, useEffect, createContext } from 'react'

export const TripSuggestioncontext = createContext();

export const TripSuggestionProvider = props => {
    const [fetchData, setFetchData] = useState(undefined);
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
        <TripSuggestioncontext.Provider value={fetchData}>
            {props.children}
        </TripSuggestioncontext.Provider>
    );
}