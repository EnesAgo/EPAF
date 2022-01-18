import React from 'react'
import './../css/Article.css'

function Waterborneinfections() {
      return (
          <div className='article'>
              <div className="image">
                  <img src="https://images-ext-1.discordapp.net/external/yiKq5ti__DSX1l8Jxuu3IRzandJXj-UXi-iZ66iNXMg/https/www.mountaineering.scot/assets/contentimages/WP12-11548-20160610141210.jpeg?width=800&height=336" alt='https://images-ext-1.discordapp.net/external/yiKq5ti__DSX1l8Jxuu3IRzandJXj-UXi-iZ66iNXMg/https/www.mountaineering.scot/assets/contentimages/WP12-11548-20160610141210.jpeg?width=800&height=336' />
              </div>
              <div className="author">
                  <h3>Author: www.mountaineering.scot</h3>
              </div>
              <div className="paragraph">
                  <div>


                    Although water from streams and rivers is generally safe, you should always follow good hygiene rules and be aware of possible water-borne infections. <br />
                    {/* <br />  */}
                    Possible infections are described below: <br />
                    <br /> 
                    <b>E Coli</b> is most likely to be contracted by swallowing water contaminated with sewerage. <br />
                    Symptoms: rapid onset of diarrhoea without blood <br />
                    <br />
                    <b>Shingella and Salmonella.</b> <br />
                    Symptoms: generally start 24 hours after exposure and may include fever, vomiting and diarrhoea with blood. <br />
                    <br />
                    <b>Leptospirosis</b> has two forms: Weils Disease &#40;a dangerous condition which results from infection carried in rats' urine&#41; and the Hardjo form transmitted to humans from cattle. <br />
                    Symptoms: fever and flu-like condition <br />
                    <br />
                    <b>Giardia and Amoebic Dysentery.</b> <br /> 
                    Symptoms: these start 24 hours after exposure and may include vomiting, diarrhoea with mucous and blood, eggy sulphurous burps and foul smelling gas. <br />
                    <br />

                  </div>
              </div>
          </div>
      )
  }


export default Waterborneinfections;