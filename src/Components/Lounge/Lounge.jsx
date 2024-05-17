import React, { useEffect } from 'react';

// Import image
import imageGrid from '../../assets/zaavar.jpg';

// Import AOS
import Aos from 'aos';
import 'aos/dist/aos.css';

const Lounge = () => {
  // useEffect to set animation duration
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="lounge container section">
      <div className="sectionContainer grid">
        <div data-aos="fade-left" data-aos-duration="2500" className="imgDiv">
          {/* Adjust image size using CSS */}
          <img src={imageGrid} style={{ width: '200rem', height: 'auto' }} />
        </div>

        <div className="textDiv">
          <h2 data-aos="fade-down" data-aos-duration="2500">Мэдээлэл</h2>

          <div className="grids grid">
            <div data-aos="fade up" data-aos-duration="2500" className="singleGrid">
              <span className="gridTitle">
                <b>Онгоц дотор юу анхаарах вэ</b>
              </span>
              <p>
                Суудлын бүсээ сайн бүслээд зорьсон газраа очих хүртэл Netflix&Chill
              </p>
            </div>

            <div data-aos="fade up" data-aos-duration="2500" className="singleGrid">
              <span className="gridTitle">
                <b>Газардах үед</b>
              </span>
              <p>
                Нисгэгч зааварчилгаа өгтөл тайван хүлээж суух, яарч сандран хаалган дээр зогсохгүй байх.
              </p>
            </div>

            <div data-aos="fade up" data-aos-duration="2500" className="singleGrid">
              <span className="gridTitle">
                <b>Онгоц сүйрэх үед</b>
              </span>
              <p>
                Үхэлтэйгээ эвлэрээд уйлах, хайртай хүнээ тэврэх, амьдралаа эргэцүүлж бодох. Хэрвээ амьд гарвал яаж тусламж дуудахаа бодох.
              </p>
            </div>

            <div data-aos="fade up" data-aos-duration="2500" className="singleGrid">
              <span className="gridTitle">
                <b> Хориглох зүйлс</b>
              </span>
              <p>
                Хэт их уйлдаг бага насны хүүхэд, уух зүйлс болон шингэн идэх бүтээгдэхүүн.Мансууруулах бодис болон галт зэвсэгийг хориглоно.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lounge;
