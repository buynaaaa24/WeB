import React, {useState} from 'react'

//Imported Icons
import { SiConsul } from "react-icons/si";
import { BsDisplay, BsPhoneVibrate, BsSticky } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { CgMenuGridO } from 'react-icons/cg';

//Imported Images
import logo from '../../assets/logo.png'

const Navbar = () => {

  //remove the navbar in the small width screen
  const [active, setActive] = useState('navBarMenu')
  const showNavBar = ()=>{
    setActive('navBarMenu showNavBar')
  }

  const removeNavBar = ()=>{
    setActive('navBarMenu')
  }


  //add a background color on the second navbar
  const [noBg, addBg] = useState('navBarTwo')
  const addBgColor = ()=>{
    if(window.scrollY >= 10){
      addBg('navBarTwo navbar_With_bg')
    }else{
      addBg('navBarTwo')
    }
  }
  window.addEventListener('scroll',addBgColor)


  return(
    <div className="navBar flex">

      <div className="navBarOne flex">
        <div>
        <SiConsul className='icon'/>
        </div>

        <div className="none flex">
          <li className='flex'><BsPhoneVibrate className='icon'/>Тусламж</li>
          <li className='flex'><AiOutlineGlobal className='icon'/>Хэлний сонголт</li>
        </div>

        <div className="atb flex">
          <span>Нэвтрэх</span>
          <span>Гарах</span>
        </div>

      </div>

      <div className={noBg}>

        <div className="logoDiv">
          <img src={logo} className='Logo'/>
        </div>

        <div className={active}>
          <ul className='menu flex'>
            <li onClick={removeNavBar} className="listItem">Нүүр</li>
            <li onClick={removeNavBar} className="listItem">Бидний тухай</li>
            <li onClick={removeNavBar} className="listItem">Санал хүсэлт</li>
            <li onClick={removeNavBar} className="listItem">Мэдээлэл</li>
            <li onClick={removeNavBar} className="listItem">Нислэгийн хуваарь</li>
          </ul>

          <button onClick={removeNavBar} className='btn flex btnOne'>
            Холбогдох
          </button>
        </div>

        <button className='btn flex btnTwo'>
          Холбогдох
        </button>

        <div onClick={showNavBar} className="toggleIcon">
          <CgMenuGridO className='icon'/>
        </div>

      </div>
    </div>
  )
}

export default Navbar