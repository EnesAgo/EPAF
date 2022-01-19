import React from 'react'
import '../css/ReportFireAndPollution.css'

function ReportFormTrip({getFileDataFunction, getSendFromData, getPlaceDataFunction, descriptionDataFunction, generalInfoDataFunction, getTitleDataFunction, buttonOnClick}) {

  const styles = {
    height: "22px"
  }

      return (
          <div className='reportFormContainer'>
              <div className='reportForm'>
                    <div className='reportFormDivs firstReportDiv'>
                        <h3>Title: </h3> <br />
                        <h3>Place: </h3> <br />
                        {/* <h3>General info:</h3> <br /> */}
                        <h3>Description: </h3> <br />
                        <h3>Send From - your name: </h3> <br />
                        <h3>Upload photos: </h3>
                    </div>
                    <div className='reportFormDivs'>

                        <input type="text" style={styles} placeholder='Title' onChange={getTitleDataFunction} required /> <br />

                        <input type="text" style={styles}  placeholder='Place' onChange={getPlaceDataFunction} required /> <br />

                        {/* <textarea style={styles}  placeholder='General info - ex. Place for Eating' name="generalInfo" onChange={generalInfoDataFunction} required cols="30" rows="1"></textarea> <br /> */}
                        

                        <textarea style={styles}  placeholder='Description' name="description" onChange={descriptionDataFunction} required cols="30" rows="1"></textarea> <br />


                        <input style={styles}  type="text" placeholder='Dend from (your name) ' onChange={getSendFromData} required /> <br />


                        <label htmlFor="file-upload" className="custom-file-upload">
                          custom upload
                        </label>
                        <input type="file" id="file-upload" onChange={getFileDataFunction} required accept="image/png, image/jpeg" /> 


                    </div>
                  </div>
                  <button onClick={buttonOnClick} className='specialButtonReport'>
                    SUBMIT
                  </button>
          </div>
      )
  }


export default ReportFormTrip;