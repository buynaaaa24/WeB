import React from 'react'

//imported icons
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiAccountPinCircleLine } from "react-icons/hi";
import { RxCalendar } from "react-icons/rx";

const Search = () => {
  return (
    <div className='search container section'>
      <div className="sectionContainer grid">

        <div className="btns flex">

          <div className="singleBtn">
            <span className="Economy"></span>
          </div>

          <div className="singleBtn">
            <span className="Business class"></span>
          </div>

          <div className="singleBtn">
            <span className="First class"></span>
          </div>

        </div>

        <div className="searchInputs flex">
          {/*Single Input*/}
          <div className="singleInput flex">
            <div className="ivonDiv">
              <HiOutlineLocationMarker className='icon'/>
            </div>
            <div className="texts">
              <h4 className="Location"></h4>
              <input type="text" placeholder='Where do you want to go' />
            </div>
          </div>

          {/*Single Input*/}
          <div className="singleInput flex">
            <div className="ivonDiv">
              <RiAccountPinCircleLine className='icon'/>
            </div>
            <div className="texts">
              <h4>Tavel</h4>
              <input type="text" placeholder='Add guests' />
            </div>
          </div>

          {/*Single Input*/}
          <div className="singleInput flex">
            <div className="ivonDiv">
              <RxCalendar className='icon'/>
            </div>
            <div className="texts">
              <h4>Check In</h4>
              <input type="text" placeholder='Add date' />
            </div>
          </div>

          {/*Single Input*/}
          <div className="singleInput flex">
            <div className="ivonDiv">
              <RxCalendar className='icon'/>
            </div>
            <div className="texts">
              <h4>Check Out</h4>
              <input type="text" placeholder='Add date' />
            </div>
          </div>

          <button className='btn btnBlock'>Search Flight</button>

        </div>

      </div>

    </div>
  )
}

export default Search
