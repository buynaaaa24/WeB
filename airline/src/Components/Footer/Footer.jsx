import React, {useEffect} from 'react'

//Imported Images
import Logo from '../../assets/logo.png'

//Imported Icons
import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";

//import aos
import Aos from 'aos';
import 'aos/dist/aos.css'

const Footer = () => {


  //useEffevt to set animation duration
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])


  return (
    <div className='footer'>

      <div className="sectionContainer container grid">

        <div data-aos='fade-up' data-aos-duration='2500' className="gridOne">
          <div className="logoDiv">
            <img src={Logo} className='Logo'/>
          </div>
          <p>Your mind should be stronger than your feelings, fly!</p>
          <div className="socialIcon flex">
          <TiSocialFacebook className='icon'/>
          <AiOutlineTwitter className='icon'/>
          <AiFillYoutube className='icon'/>
          <FaPinterestP className='icon'/>
          </div>
        </div>

        <div data-aos='fade-up' data-aos-duration='2500' className="footerLinks">
          <span className="linkTitle">Information</span>
          <li>
            <a href="">Home</a>
            </li>
          <li>
            <a href="">Explore</a>
            </li>
          <li>
            <a href="">flight Status</a>
            </li>
          <li>
            <a href="">Travel</a>
            </li>
          <li>
            <a href="">Check-In</a>
            </li>
          <li>
            <a href="">Manage your booking</a>
          </li>
        </div>


        <div data-aos='fade-up' data-aos-duration='2500' className="footerLinks">
          <span className="linkTitle">Quick Guide</span>
          <li>
            <a href="">FAQ</a>
            </li>
          <li>
            <a href="">How to</a>
            </li>
          <li>
            <a href="">Features</a>
            </li>
          <li>
            <a href="">Baggage</a>
            </li>
          <li>
            <a href="">Route Map</a>
            </li>
          <li>
            <a href="">Our communities</a>
          </li>
        </div>


        <div data-aos='fade-up' data-aos-duration='2500' className="footerLinks">
          <span className="linkTitle">Information</span>
            <li>
              <a href="">Home</a>
              </li>
            <li>
              <a href="">Explore</a>
              </li>
            <li>
              <a href="">flight Status</a>
              </li>
            <li>
              <a href="">Travel</a>
              </li>
            <li>
              <a href="">Check-In</a>
              </li>
            <li>
              <a href="">Manage your booking</a>
            </li>
        </div>

      </div>

      <div className="copyRightDiv flex">
        <p><a href="https://emailto-isratech8@outlook.com" target='_blank'></a></p>
      </div>

    </div>
  )
}

export default Footer