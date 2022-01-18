import React from 'react'
import './../css/About.css'

function AboutQuestion({question, answer}) {
      return (
          <div className='aboutQuestion'>
              <div className='aboutDiv'>
                <br />
                <h2>{question}</h2> <br />
                <h4>{answer}</h4>
                <br />
              </div>
          </div>
      )
  }


export default AboutQuestion;