import React, { useEffect } from 'react'
import Search from '../Search/Search'
import Info from '../Info/Info'
import Lounge from '../Lounge/Lounge'
import Subscribers from '../Subscribers/Subscribe'
import Support from '../Support/Support'
import Travelers from '../Travelers/Travelers'
//Imported assets
import video from '../../assets/video.mp4'
import aeroplane from '../../assets/takeOff.png'
import sky from '../../assets/sky.png'


//Import AOS
import Aos from 'aos'
import 'aos/dist/aos.css'


const Home = () => {
  //useEffevt to set animation duration
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])


  return (
    <div className='home flex container'>

      <div className="mainText">
        <h1 data-aos='fade-up' data-aos-duration='2500'>Create Ever-lasting Memories With Us</h1>
      </div>

      <div data-aos='fade-up' data-aos-duration='2500' className="homeImages flex">

        <div className="videoDiv">
          <video src={video} autoPlay muted loop className='video'></video>
        </div>

        <img src={aeroplane} className='plane' />
    </div>
      <Search />
      <Support />
      <Info />
      <Lounge />
      <Travelers />
      <Subscribers />
    </div>
  )
}

export default Home
