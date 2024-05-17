import React from 'react';
import './About.css';
import turkishAirlines from '../../assets/turkish-airlines.png';
import koreanAir from '../../assets/korean-air.png';
import emirates from '../../assets/emirates.png';
import miat from '../../assets/miat.png';
import qatarAirways from '../../assets/qatar-airways.png';
const About = () => {
return (
    <div className="about">
    {/* First Section */}
    <section className="about-section">
        <h2>Хамтрагч нислэгийн компани</h2>
        <div className="logos">
    <img className='turkish-airlines' src={turkishAirlines} alt="Turkish Airlines" />
    <img className='korean-air' src={koreanAir} alt="Korean Air" />
    <img className='emirates' src={emirates} alt="Emirates" />
    <img className='miat' src={miat} alt="MIAT" />
    <img className='qatar' src={qatarAirways} alt="Qatar Airways" />
  </div>
    </section>

    
    <section className="about-section">
        <h2>Манай системийг сонгон үйлчлүүлэх шалтгаан</h2>
        <div className="reasons">
        <p><b>1.Нэмэгдэлгүй үнээр тийз захиалах</b></p>
        <p>Манай компани нь авиа компаниудын борлуулах үнэ дээр нэмэгдэл тооцодгүй тул та 
            олон улс болон орон нутгийн нислэгийн тийзээ зах зээлийн бодит үнэ 
            ханшаар худалдан авах болно.</p>
        <p><b>2.Найдвартай тогтвортой үйл ажиллагаа</b></p>
        <p>Манай систем нь олон улсын нислэгийн тийз захиалга, борлуулалт, нислэгтэй холбоотой мэдээлэл өгөх үйлчилгээнүүдийг үзүүлж цаашдаа улам өргөжүүлж,тогтвортой ажиллаж байна.</p>
        <p><b>3.24/7 тийз захиалга</b></p>
        <p>Манай системээр дамжуулан та бүхэн өөрийн тав тухтай байдалдаа тааруулан сонгон үйлчлүүлэх боломжтой.</p>
        </div>
    </section>
    </div>
);
};

export default About;
