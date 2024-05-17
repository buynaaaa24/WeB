import React, {useEffect} from 'react'

//imported Destination Images
import buynaa from '../../assets/Buynaa.jpg'
import ujin from '../../assets/Ujin.jpg'
import toroo from '../../assets/Toroo.jpg'
import london from '../../assets/london.png'

//imported Traveler Images
import traveler1 from '../../assets/user(1).png'
import traveler2 from '../../assets/user(2).png'
import traveler3 from '../../assets/user(3).png'
import traveler4 from '../../assets/user(4).png'

//import aos
import Aos from 'aos';
import 'aos/dist/aos.css'

const travelers = [
  {
    id: 1,
    destinationImage: buynaa,
    travelerImage: traveler1,
    travelerName: 'Buynaa',
    socialLink: '@buynaa'
  },

  {
    id: 2,
    destinationImage: ujin,
    travelerImage: traveler2,
    travelerName: 'Ujin',
    socialLink: '@tsgtsujin'
  },

  {
    id: 3,
    destinationImage: toroo,
    travelerImage: traveler3,
    travelerName: 'Turuu',
    socialLink: '@turuu'
  },

  {
    id: 4,
    destinationImage: london,
    travelerImage: traveler4,
    travelerName: 'User',
    socialLink: '@user'
  },
]

const Travelers = () => {

  //useEffevt to set animation duration
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
    <div className='travelers container section'>
      <div className="sectionContainer">
        <h2 data-aos='fade-down' data-aos-duration='2500'>
          Аялагчид!
        </h2>
        <div className="travelersContainer grid">
            {
              travelers.map(({id, destinationImage, travelerImage, travelerName, socialLink})=>{
                return(
                  //{/*Single passenger card*/}
                  <div data-aos='fade-up' data-aos-duration='2500' key={id} className="singleTraveler">
                    <img src={destinationImage} className='destinationImage'/>
        
                    <div className="travelerDetails">
                      <div className="travelerPicture">
                        <img src={travelerImage} className='travelerImage'/>
                      </div>
                      <div className="travelerName">
                        <span>{travelerName}</span>
                        <p>{socialLink}</p>
                      </div>
                    </div>
        
                  </div>
                )
              })
            }

        </div>
      </div>

    </div>
  )
}

export default Travelers
