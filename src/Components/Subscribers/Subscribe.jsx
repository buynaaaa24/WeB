import React, {useEffect} from 'react'

//import aos
import Aos from 'aos';
import 'aos/dist/aos.css'

const Subscribe = () => {


  //useEffevt to set animation duration
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])


  // return (
  //   // <div className='subscribe section'>
  //   //   <div data-aos='fade-up' data-aos-duration='2500' className="sectionContainer container">
  //   //     <h2></h2>
  //   //     <div className="inputDiv flex">
  //   //       <input type="text" placeholder='Enter your email address' />
  //   //       <button className='btn'></button>
  //   //     </div>
  //   //   </div>
      
  //   // </div>
  // )
}

export default Subscribe