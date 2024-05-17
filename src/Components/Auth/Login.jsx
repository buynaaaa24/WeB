// import React, { useState } from 'react';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

  
//   const signUpInfo = {
//     username: 'exampleUser',
//     password: 'examplePassword',
//     email: 'example@example.com',
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

   
//     if (username !== signUpInfo.username || password !== signUpInfo.password) {
//       setError('Буруу оруулсан байна');
//       return;
//     }


//     if (!isValidEmail(username)) {
//       setError('Буруу цахим шуудан байна');
//       return;
//     }

//     console.log('Logging in with:', { username, password });
//     setUsername('');
//     setPassword('');
//     setError('');
//   };

 
//   const isValidEmail = (email) => {
  
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="username">Хэрэглэгчийн нэр:</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(event) => setUsername(event.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Нууц үг:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(event) => setPassword(event.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Нэвтрэх</button>
//       </form>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../styles/login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login', { email, password })
            .then(result => {
                if (result.data === "Success"){
                    navigate('/home');
                } else {
                    alert(result.data);
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={handleSubmit}>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title" >Нэвтрэх</h3>
                
                    <div className="form-group mt-3">
                        <label>И-Мэйл хаяг</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="И-Мэйл оруулах"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="form-group mt-3">
                        <label>Нууц үг</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Нууц үг оруулах"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="d-grid gap-5 mt-3">
                        <button type="submit" className="btn">
                            Нэвтрэх
                        </button>
                    </div>
                    
                    {/* <p className="forgot-password">
                    Нууц үг<a href="/recovery"> мартсан?</a>
                    </p> */}
                    
                    {errorMessage && <p className="text-danger">{errorMessage}</p>}
                </div>
            </form>
        </div>
    );
}

export default Login;