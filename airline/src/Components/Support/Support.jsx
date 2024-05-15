import React from 'react'

//imported images
import gridImage from '../../assets/images-Grid2.png'
const Support = () => {
  return (
    <div className='support container section'>
      <div className="sectionContainer">

        <div className="tittleDiv">
          <small>travel support</small>
          <h2>Plan your travel with confidence</h2>
          <p>Find help with booking and travel plans, see what to expect along 
            the journey!</p>
        </div>

        <div className="infoDiv grid">
          
          <div className="textDiv grid">
            <div className="singleInfo">
              <span className='number'>01</span>
              <h4>Travel req</h4>
              <p>
                Find help
              </p>
            </div>

            <div className="singleInfo">
              <span className='number colorOne'>02</span>
              <h4>Travel req</h4>
              <p>
                Find help
              </p>
            </div>

            <div className="singleInfo">
              <span className='number colorTwo'>03</span>
              <h4>Travel req</h4>
              <p>
                Find help
              </p>
            </div>

          </div>

          <div className="imgDiv">
            <img src={gridImage} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Support
