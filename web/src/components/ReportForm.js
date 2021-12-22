import React from 'react'
import '../css/ReportFireAndPollution.css'

function ReportForm({getFileDataFunction, getSelectDataFunction, getDescriptionDataFunction}) {


      return (
          <div className='reportFormContainer'>
              <div className='reportForm'>
                    <div className='reportFormDivs'>
                        <h3>Upload photos: </h3> <br />
                        <h3>Type of Problem: </h3> <br />
                        <h3>Description:</h3>
                    </div>
                    <div className='reportFormDivs'>
                        <label for="file-upload" className="custom-file-upload">
                          custom upload
                        </label>
                        <input type="file" id="file-upload" onChange={getFileDataFunction} accept="image/png, image/jpeg" /> <br />

                        <select onChange={getSelectDataFunction} name="select" id="select">
                            <option selected disabled>Choose one</option>
                            <option value="fire">Fire</option>
                            <option value="pollution">Pollution</option>
                        </select> <br />


                        <textarea name="description" onChange={getDescriptionDataFunction} cols="30" rows="1"></textarea>


                    </div>
                  </div>
                  <button className='specialButtonReport'>
                    SUBMIT
                  </button>
          </div>
      )
  }


export default ReportForm;