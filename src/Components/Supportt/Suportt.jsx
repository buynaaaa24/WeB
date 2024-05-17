import React from 'react';
import '../../styles/supportt';

function Supportt() {
  return (
    <div className="container">
      <div className="modal">
        <h2>Сменя кусат</h2>
        <p>Введите текстовое значение ниже</p>
        <div className="icons">
          <div className="icon selected" />
          <div className="icon" />
          <div className="icon" />
          <div className="icon" />
          <div className="icon" />
        </div>
        <textarea placeholder="Введите ваш текст" />
        <button>Сменя, прокат и крути</button>
      </div>
    </div>
  );
}

export default Supportt;