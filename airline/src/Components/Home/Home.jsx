import React, {useEffect} from 'react'

//Imported assets
import video from '../../assets/video.mp4'
import aeroplane from '../../assets/takeOff.png'

//Import AOS
import Aos from 'aos'
import 'aos/dist/aos.css'
const Home = () => {
  return (
    <div className='home flex container'>
      
      <div className="mainText">
        <h1>Create Ever-lasting Memories With Us</h1>
      </div>

      <div className="homeImages flex">
        
        <div className="videoDiv">
          <img src={sky} autoPlay muted loop className='video'/>
        </div>

        <img src={aeroplane} className='plane'/>
      </div>
    </div>
  )
}

export default Home
