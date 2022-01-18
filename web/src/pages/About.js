import React, { useState } from 'react'
import AboutQuestion from '../components/AboutQuestion';
import './../css/About.css'

function About() {

    const [text] = useState([
        {
            question: "What is EPAF?",
            answer: "As mentioned in the Main Interface. EPAF is a Environmentaly-Friendly Application. As we know of the Corona Virus, many people want to exit the cities and relax in the nature. With that in mind, we need to be aware of natural habitat of the animals and  plants"
        },
        {
            question: "How to use?",
            answer: "First the user needs to allow two permissions (for internet and location). Every interface as easy to use and well explained in the start. Since we provide Android and Web application of this program, the user can see the same content on both."
        },
        {
            question: "Why to use EPAF?",
            answer: "The answer is simple. If we want to preserve the planet and make it last longer, we must protect the environment. Enough was being built in the cities, so to prevent this from happening in the mountains and forests we have to protect them.Through small and individual steps, humanity will protect the planet."
        },
        {
            question: "Where you can use EPAF?",
            answer: "Currently you can use EPAF on Android and web application."
        },
        {
            question: "When to start using EPAF?",
            answer: "NOW. The environment needs your help and with the use of EPAF you can do that."
        }
    ])
    
      return (
          <div className='about'>
              {text 
              && text.map(e => <AboutQuestion question={e.question} answer={e.answer} />)}
          </div>
      )
  }


export default About;