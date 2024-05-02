import React, {userState} from 'react'

//icon
import {SiConsul} from 'react-icons/si'
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";


//img
// import logo from '../../assets/logo.png'

const Navbar = () => {

// Navbar small width screen
  const {active, setActive} = useState('navBarMenu')
  const showNavBar = ()=>{
    setActive('navBarMenu showNavBar')
  }
  
  const removeNavBar = ()=>{
    setActive('navBarMenu showNavBar')
  }

  //add backGround color second Navbar
  const {noBg, addBg} = useState('navBarTwo')

  const addBGColor = ()=>{
    if(window.scrollY >= 10){
      addBG('navBarTwo navbar_With_Bg')
    }else{
      addBG('navBarTwo')
    }
  }
  window.addEventListener('scroll',addBGColor)
  
 

  return (
    <div className='navBar flex'>
        <div className='navBarOne flex'>
            <div>
            <SiConsul />
            </div>

             <div className='none flex'>
              <li className='flex'><BsPhoneVibrate className='icon'/>Support</li>
              <li className='flex'><AiOutlineGlobal className='icon'/>Languages</li>
             </div>

             <div className='atb flex'>
              <span>Sign in</span>
              <span>Sign out</span>
             </div>
        </div>

        <div className="noBG">

         <div className="logoDiy">
          <img src={logo} className='Logo'/>
         </div>

          <div className={active}>
            <ul className="menu flex">
              <li onClick={removeNavBar} className="listItem">Home</li>
              <li onClick={removeNavBar} className="listItem">About</li>
              <li onClick={removeNavBar} className="listItem">Offers</li>
              <li onClick={removeNavBar} className="listItem">Seats</li>
              <li onClick={removeNavBar} className="listItem">Destinations</li>
            </ul>

            <button onClick={removeNavBar} className='btn flex btnOne'>
              Contact
            </button>
          </div>

          <button className='btn flex btnTwo'>
              Contact
            </button>
          <div onClick={showNavBar} className='toggleIcon'>
          <CgMenuGridO className='icon'/>
          </div>


        </div>
    </div>
  )
}

export default Navbar
