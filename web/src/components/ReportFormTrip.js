import React from 'react'
import '../css/ReportFireAndPollution.css'

function ReportFormTrip({getFileDataFunction, getSendFromData, getPlaceDataFunction, descriptionDataFunction, generalInfoDataFunction, getTitleDataFunction, buttonOnClick}) {


      return (
          <div className='reportFormContainer'>
              <div className='reportForm'>
                    <div className='reportFormDivs firstReportDiv'>
                        <h3>Title: </h3> <br />
                        <h3>Place: </h3> <br />
                        <h3>Upload photos: </h3> <br />
                        <h3>General info:</h3> <br />
                        <h3>Description: </h3> <br />
                        <h3>Send From - your name: </h3>
                    </div>
                    <div className='reportFormDivs'>

                        <input type="text" placeholder='Title' onChange={getTitleDataFunction} required /> <br />

                        <input type="text" placeholder='Place' onChange={getPlaceDataFunction} required /> <br />

                        <label htmlFor="file-upload" className="custom-file-upload">
                          custom upload
                        </label>
                        <input type="file" id="file-upload" onChange={getFileDataFunction} required accept="image/png, image/jpeg" /> <br />

                        <textarea placeholder='general info' name="generalInfo" onChange={generalInfoDataFunction} required cols="30" rows="1"></textarea>
                        
                        <br />

                        <textarea placeholder='description' name="description" onChange={descriptionDataFunction} required cols="30" rows="1"></textarea>

                        <br />

                        <input type="text" placeholder='send from (your name) ' onChange={getSendFromData} required /> <br />

                    </div>
                  </div>
                  <button onClick={buttonOnClick} className='specialButtonReport'>
                    SUBMIT
                  </button>
          </div>
      )
  }


export default ReportFormTrip;