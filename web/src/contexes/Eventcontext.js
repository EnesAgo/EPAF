import React, { useState, useEffect, createContext } from 'react'

export const Eventcontext = createContext();

export const EventProvider = props => {
    const [fetchData, setFetchData] = useState(undefined);
    async function getData() {
        const response = await fetch('https://EPAFbackend.agoenes.repl.co/post');
        const resData = await response.json();

        setFetchData(resData)
        console.log(resData)
    }

    useEffect(()=>{
        getData();
        }, []);

    return (
        <Eventcontext.Provider value={fetchData}>
            {props.children}
        </Eventcontext.Provider>
    );
}