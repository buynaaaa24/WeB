import React, { useState } from 'react';
import './Complain.css';

const Complain = () => {
  const [formData, setFormData] = useState({
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.message = formData.message ? "" : "Энэ хэсэгт юм бичнэ үү.";
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(formData);
    }
  };

  return (
    <div className="complain">
      <h2>Санал хүсэлт</h2>
      <p>Манай үйлчилгээний талаар үнэлгээ өгнө үү</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="message">Таны санал хүсэлт</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <span className="error">{errors.message}</span>}
        </div>
        <button type="submit" className="btn">Санал, хүсэлт илгээх</button>
      </form>
    </div>
  );
};

export default Complain;
