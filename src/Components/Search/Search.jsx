import React, {useEffect} from 'react'

//imported icons
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiAccountPinCircleLine } from 'react-icons/ri';
import { RxCalendar } from "react-icons/rx";


//import aos
import Aos from 'aos';
import 'aos/dist/aos.css'

const Search = () => {

  //useEffevt to set animation duration
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])


  return (
    <div className='search container section'>
      <div data-aos='fade-up' data-aos-duration='2500' className="sectionContainer grid">

        <div className="btns flex">

          <div className="singleBtn">
            <span className="Economy">Энгийн ангилал</span>
          </div>

          <div className="singleBtn">
            <span className="Business class">Бизнес ангилал</span>
          </div>

          <div className="singleBtn">
            <span className="First class">Нэгдүгээр зэрэглэл</span>
          </div>

        </div>

        <div data-aos='fade-up' data-aos-duration='2000' className="searchInputs flex">
          {/*Single Input*/}
          <div className="singleInput flex">
            <div className="ivonDiv">
              <HiOutlineLocationMarker className='icon'/>
            </div>
            <div className="texts">
              <h4 className="Location">Байршил</h4>
              <input type="text" placeholder='Хаашаа аялах вэ' />
            </div>
          </div>

          {/*Single Input*/}
          <div className="singleInput flex">
            <div className="ivonDiv">
              <RiAccountPinCircleLine className='icon'/>
            </div>
            <div className="texts">
              <h4>Аялагчид</h4>
              <input type="text" placeholder='Аялах хүмүүс' />
            </div>
          </div>

          {/*Single Input*/}
          <div className="singleInput flex">
            <div className="ivonDiv">
              <RxCalendar className='icon'/>
            </div>
            <div className="texts">
              <h4>Явах өдөр</h4>
              <input type="text" placeholder='Өдрөө сонгоно уу' />
            </div>
          </div>

          {/*Single Input*/}
          <div className="singleInput flex">
            <div className="ivonDiv">
              <RxCalendar className='icon'/>
            </div>
            <div className="texts">
              <h4>Буцах өдөр</h4>
              <input type="text" placeholder='Өдрөө сонгоно уу' />
            </div>
          </div>

          <button className='btn btnBlock flex'>Нислэг хайх</button>

        </div>

      </div>

    </div>
  )
}

export default Search
