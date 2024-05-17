import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  
  const signUpInfo = {
    username: 'exampleUser',
    password: 'examplePassword',
    email: 'example@example.com',
  };

  const handleSubmit = (event) => {
    event.preventDefault();

   
    if (username !== signUpInfo.username || password !== signUpInfo.password) {
      setError('Буруу оруулсан байна');
      return;
    }


    if (!isValidEmail(username)) {
      setError('Буруу цахим шуудан байна');
      return;
    }

    console.log('Logging in with:', { username, password });
    setUsername('');
    setPassword('');
    setError('');
  };

 
  const isValidEmail = (email) => {
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Хэрэглэгчийн нэр:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Нууц үг:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <button type="submit">Нэвтрэх</button>
      </form>
    </div>
  );
};

export default Login;
