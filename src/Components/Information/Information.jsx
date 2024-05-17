import React, { useEffect } from 'react';
import './Information.css';
import terminalImage from '../../assets/terminal1 (2).jpg';

const Information = () => {
  useEffect(() => {
    document.title = 'Мэдээлэл, санамж'; // Set the document title dynamically
  }, []);

  return (
    <div className="information">
      <h2><b>Хэрэгцээт мэдээллүүд</b></h2>
      <div className="content">
        <div className="text">
          <h1><b>Мэдээлэл, санамж</b></h1>
          <p>Нислэгийн компаниар үйлчлүүлж, ачааныхаа даацын хэмжээг хэтэрсэнг мэдэж буцаагдаарай. Мөн эдгээр зүйлсийг хориглоно:</p>
          <ul>
            <li>1. Хүүхэд</li>
            <li>2. Хоол хүнс</li>
            <li>3. Шингэн хүнс</li>
            <li>4. Галт зэвсэг</li>
          </ul>
          <p>Мөн Буутай дээрэмчид ороод ирвэл эд зүйлсээ шууд өгөөрэй.</p>
        </div>
        <div className="images">
          <img src={terminalImage} alt="Terminal 2" />
        </div>
      </div>
    </div>
  );
};

export default Information;
