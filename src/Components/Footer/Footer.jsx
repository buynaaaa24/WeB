import React from 'react';
import turkishAirlines from '../../assets/turkish-airlines.png';
import koreanAir from '../../assets/korean-air.png';
import emirates from '../../assets/emirates.png';
import miat from '../../assets/miat.png';
import qatarAirways from '../../assets/qatar-airways.png';
function Footer() {
  return (
    <footer className="footer">
      <div className="logos">
        <img className='turkish-airlines' src={turkishAirlines} alt="Turkish Airlines" />
        <img className='korean-air' src={koreanAir} alt="Korean Air" />
        <img className='emirates' src={emirates} alt="Emirates" />
        <img className='miat' src={miat} alt="MIAT" />
        <img className='qatar' src={qatarAirways} alt="Qatar Airways" />
      </div>
      <nav className="navigation">
        <a href="/">Нүүр</a>
        <a href="/about">Бидний тухай</a>
        <a href="/support">Санал хүсэлт</a>
        <a href="/info">Мэдээлэл</a>
        <a href="/schedule">Нислэгийн хуваарь</a>
      </nav>
    </footer>
  );
}

export default Footer;
