import React, { useState } from 'react'
import { Link, Route } from 'react-router-dom';

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
  const showNavBar = () => {
    setActive('navBarMenu showNavBar')
  }

  const removeNavBar = () => {
    setActive('navBarMenu')
  }

  //add a background color on the second navbar
  const [noBg, addBg] = useState('navBarTwo')
  const addBgColor = () => {
    if (window.scrollY >= 10) {
      addBg('navBarTwo navbar_With_bg')
    } else {
      addBg('navBarTwo')
    }
  }
  window.addEventListener('scroll', addBgColor)


  return (
    <div className="navBar flex">

      <div className="navBarOne flex">
        {/* <div>
          <SiConsul className='icon' />
        </div> */}

        <div className="none flex">
          <li className='flex'><BsPhoneVibrate className='icon' />Тусламж</li>
          <li className='flex'><AiOutlineGlobal className='icon' />Хэлний сонголт</li>
        </div>

        <div className="atb flex">
        <Link to="/login" onClick={removeNavBar}>
              <li className="listItem">Нэвтрэх</li>
        </Link>
        <Link to="/signup" onClick={removeNavBar}>
              <li className="listItem">Бүртгүүлэх</li>
        </Link>
          {/* <span>Нэвтрэх</span>
          <span>Гарах</span> */}
        </div>

      </div>

      <div className={noBg}>

        <div className="logoDiv">
          <img src={logo} className='Logo' alt='Logo' />
        </div>

        <div className={active}>
          <ul className='menu flex'>
          <Link to="/" onClick={removeNavBar}>
                            <li className="listItem">Нүүр</li>
                        </Link>
                        <Link to="/about" onClick={removeNavBar}>
                            <li className="listItem">Бидний тухай</li>
                        </Link>
                        <Link to="/complain" onClick={removeNavBar}>
                            <li className="listItem">Санал хүсэлт</li>
                        </Link>
                        <Link to="/information" onClick={removeNavBar}>
                            <li className="listItem">Мэдээлэл</li>
                        </Link>
                        <Link to="/schedule" onClick={removeNavBar}>
                            <li className="listItem">Нислэгийн хуваарь</li>
                        </Link>
          </ul>

          <button onClick={removeNavBar} className='btn flex btnOne'>
            Холбогдох
          </button>
        </div>

        <button className='btn flex btnTwo'>
          Холбогдох
        </button>

        <div onClick={showNavBar} className="toggleIcon">
          <CgMenuGridO className='icon' />
        </div>

      </div>
    </div>
  )
}

export default Navbar