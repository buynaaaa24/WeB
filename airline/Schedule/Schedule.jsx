import React, { useState } from 'react';
import './Schedule.css';

function Schedule() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [flights, setFlights] = useState([]);

  const searchFlights = () => {
    const sampleFlights = [
      { time: '8:00 AM', arrival: '1:00 PM', price: 2140800, from: 'Улаанбаатар', to: 'Токио', date: 'Fri 26 Dec' },
      { time: '8:00 AM', arrival: '1:00 PM', price: 2140800, from: 'Улаанбаатар', to: 'Токио', date: 'Fri 26 Dec' },
      { time: '8:00 AM', arrival: '1:00 PM', price: 2140800, from: 'Улаанбаатар', to: 'Токио', date: 'Fri 26 Dec' },
    ];
    setFlights(sampleFlights);
  };

  return (
    <div className="App">
      <main>
    
        <div className="navigation-bar">
        <div className="nav-item">
            <span>1 талдаа</span>
            <span className="dropdown-arrow">▼</span>
        </div>
        <div className="nav-item">
            <span>Зорчигчийн тоо</span>
            <span className="dropdown-arrow">▼</span>
        </div>
        <div className="nav-item">
            <span>Суудлын ангилал</span>
            <span className="dropdown-arrow">▼</span>
        </div>
        </div>

        <div className="search-form">
        <div className="form-group">
            <label className="icon">✈️</label>
            <input type="text" placeholder="Хаанаас?" />
        </div>
        <div className="form-group">
            <label className="icon">✈️</label>
            <input type="text" placeholder="Хаашаа?" />
        </div>
        <div className="form-group">
            <label className="icon">📅</label>
            <select>
            <option>Явах өдөр?</option>
            </select>
        </div>
        <div className="form-group">
            <label className="icon">📅</label>
            <select>
            <option>Буцах өдөр?</option>
            </select>
        </div>
        <div className="form-group">
            <button onClick={searchFlights}>Хайх</button>
        </div>
        </div>


        <div className="flights">
          {flights.map((flight, index) => (
            <div className="flight" key={index}>
              <div className="flight-info">
                <div>DEPARTURE {flight.date}</div>
                <div>{flight.time} - {flight.arrival}</div>
                <div>{flight.price}₮ MNT</div>
                <div>{flight.from} - {flight.to}</div>
              </div>
              <button>Захиалах</button>
            </div>
          ))}
        </div>     

      </main>
    </div>
  );
}

export default Schedule;
