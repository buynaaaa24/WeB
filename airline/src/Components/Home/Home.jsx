import React, {useEffect} from 'react'

//Imported assets
import video from '../../assets/video.mp4'
import aeroplane from '../../assets/takeOff.png'

//Import AOS ===========>
import Aos from 'aos'
import 'aos/dist/aos.css'
const Home = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])


  return (
    <div className='home flex container'>
      
      <div className="mainText">
        <h1 data-aos='fade-up' data-aos-duration='2500'> Create Ever-lasting Memories With Us</h1>
      </div>
      <div data-aos='fade-down' data-aos-duration='2500' className='homeImage flex'></div>

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
