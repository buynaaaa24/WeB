import React, { useState } from 'react';
// import './Complain.css';

const Complain = () => {
  const [formData, setFormData] = useState({
    rating: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleRatingChange = (rating) => {
    setFormData({
      ...formData,
      rating: rating
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.rating = formData.rating ? "" : "Энэ хэсэгт юм бичнэ үү.";
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
          <div className="rating">
            {[1, 2, 3, 4, 5].map((rating) => (
              <span
                key={rating}
                className={`rating-icon ${formData.rating === rating ? 'selected' : ''}`}
                onClick={() => handleRatingChange(rating)}
              >
                <img src={`star${rating}.png`} alt={`Rating ${rating}`} />
              </span>
            ))}
          </div>
          {errors.rating && <span className="error">{errors.rating}</span>}
        </div>
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
