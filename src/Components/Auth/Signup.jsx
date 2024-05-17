// import React, { useState } from 'react';

// const Signup = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();

    
//     // if (!username || !email || !password || !confirmPassword) {
//     //   setError('Бүгдийг нөхнө үү');
//     //   return;
//     // }

    
//     // if (password !== confirmPassword) {
//     //   setError('Нууц үг таарахгүй байна');
//     //   return;
//     // }

   

//     console.log('Signing up with:', { username, email, password });
//     setUsername('');
//     setEmail('');
//     setPassword('');
//     setError('');
//   };

//   return (
//     <div>
//       <h2>Sign Up</h2>
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
//           <label htmlFor="email">Цахим шуудан:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(event) => setEmail(event.target.value)}
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
//         {/* <div>
//           <label htmlFor="confirmPassword">Нууц үг дахин оруулна уу:</label>
//           <input
//             type="password"
//             id="confirmPassword"
//             value={confirmPassword}
//             onChange={(event) => setConfirmPassword(event.target.value)}
//             required
//           />
//         </div> */}
//         <button type="submit">Бүртгүүлэх</button>
//       </form>
//     </div>
//   );
// };

// export default Signup;



import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../styles/signup.css";

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const validatePassword = (password) => {
        // Password should have at least one special symbol and one number, and the first letter should be upper case
        const regex = /^(?=.*[!@#$%^&*])(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return regex.test(password);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if email is already registered
        try {
            const response = await axios.get('http://localhost:3001/check-email/${email}');
            if (response.data.exists) {
                setErrorMessage("This email is already registered.");
                return;
            }
        } catch (error) {
            console.error("Error:", error);
        }

        // If email is not registered, proceed with registration
        if (!validatePassword(password)) {
            setErrorMessage("Password should have at least one special symbol, one number, and start with an uppercase letter.");
            return;
        }

        try {
            await axios.post('http://localhost:3001/register', { name, email, password });
            navigate('/login');
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={handleSubmit}>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title" >Бүртгүүлэх</h3>

                    <div className="form-group mt-3">
                        <label>Нэр</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="Нэр оруулах"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

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

                    {errorMessage && <p className="text-danger">{errorMessage}</p>}

                    <div className="d-grid gap-5 mt-3">
                        <button type="submit" className="btn">
                            Бүртгүүлэх
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Signup;