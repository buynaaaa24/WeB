import React from 'react';
// import './Header.css'; // Assuming the CSS file is named Header.css

function Header() {
  return (
    <header className="header">
      <div className="logos">
        <img src="picture1.png" alt="Turkish Airlines" />
        <img src="picture2.png" alt="Korean Air" />
        <img src="picture3.png" alt="Emirates" />
        <img src="picture4.png" alt="MIAT" />
        <img src="qatar-airways-logo.png" alt="Qatar Airways" />
      </div>
      <nav className="navigation">
        <a href="#home">Нүүр</a>
        <a href="#about-us">Бидний тухай</a>
        <a href="#request">Санал хүсэлт</a>
        <a href="#information">Мэдээлэл</a>
        <a href="#flight-schedule">Нислэгийн хуваарь</a>
      </nav>
    </header>
  );
}

export default Header;
