import React, {useEffect} from 'react'

//imported icons
import {RxCalendar} from 'react-icons/rx'
import { BsShieldCheck } from "react-icons/bs";
import { BsBookmarkCheck } from "react-icons/bs";


//import aos
import Aos from 'aos';
import 'aos/dist/aos.css'

const Info = () => {

  //useEffevt to set animation duration
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
    <div className='info section'>
      <div className="infoContainer container">

        <div className="titleDiv flex">
          <h2 data-aos='fade-right' data-aos-duration='2500'>Дэлхийгээр аялаж дурсамж бүтээ</h2>
          <button data-aos='fade-left' data-aos-duration='2500' className='btn'>
            Бүгдийг үзэх
          </button>
        </div>

        <div className="cardsDiv grid">

          <div data-aos='fade-up' data-aos-duration='2500' className="singleCard grid">
            <div className="iconDiv flex">
            <RxCalendar className='icon'/>
            </div>
            <span className='cardTitle'>Хялбар захиалга</span>
            <p>Төвлөрсөн нислэгүүдээс харан шууд захиалах</p>
          </div>

          <div data-aos='fade-up' data-aos-duration='3500' className="singleCard grid">
            <div className="iconDiv flex colorOne">
            <BsShieldCheck className='icon'/>
            </div>
            <span className='cardTitle'>Ухаалаг захиалга</span>
            <p>Хүссэн газраасаа интернет ашиглан захиалаарай</p>
          </div>

          <div data-aos='fade-up' data-aos-duration='4500' className="singleCard grid">
            <div className="iconDiv flex colorTwo">
            <BsBookmarkCheck className='icon'/>
            </div>
            <span className='cardTitle'>Илүү их аял</span>
            <p>Бидэнтэй хамт илүү аялаж, дурсамж бүтээ</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Info
