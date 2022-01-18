import React from 'react'
import '../css/ReportFireAndPollution.css'

function ReportForm({getFileDataFunction, getDescriptionDataFunction, buttonOnClick, getTimeFunction, getPlaceFunction}) {


      return (
          <div className='reportFormContainer'>
              <div className='reportForm'>
                    <div className='reportFormDivs firstReportDiv'>
                        <h3>Upload photos: </h3> <br />
                        <h3>Select Date &#38; Time: </h3> <br />
                        <h3>Place: </h3> <br />
                        <h3>Description:</h3>
                    </div>
                    <div className='reportFormDivs'>
                        <label htmlFor="file-upload" className="custom-file-upload">
                          custom upload
                        </label>
                        <input type="file" id="file-upload" onChange={getFileDataFunction} required accept="image/png, image/jpeg" /> <br />

                        <input type="datetime-local" onChange={getTimeFunction} required /> <br />

                        <input onChange={getPlaceFunction} type="text" placeholder='place name ex. London' required /> <br />

                        <textarea placeholder='descrioption' name="description" onChange={getDescriptionDataFunction} required cols="30" rows="1"></textarea>


                    </div>
                  </div>
                  <button onClick={buttonOnClick} className='specialButtonReport'>
                    SUBMIT
                  </button>
          </div>
      )
  }


export default ReportForm;