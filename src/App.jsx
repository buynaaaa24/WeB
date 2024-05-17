import React from 'react';
import Home from './Components/Home/Home';
import Info from './Components/Info/Info';
import Navbar from './Components/Navbar/Navbar';
import Search from './Components/Search/Search';
import Support from './Components/Support/Support';
import Lounge from './Components/Lounge/Lounge';
import Travelers from './Components/Travelers/Travelers';
import Subscribers from './Components/Subscribers/Subscribe';
import Footer from './Components/Footer/Footer';
import Login from './Components/Auth/Login';
import Signup from './Components/Auth/Signup';
import Information from  './Components/Information/Information';
import Complain from './Components/Comp/Complain';
import About from './Components/About/About';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './main.scss';

const App = () => {
  return (
    <div>
     <Router>
            <Navbar />
            <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />

                <Route path="/search" element={<Search />} />
                <Route path="/support" element={<Support />} />
                <Route path="/info" element={<Info />} />    
                <Route path="/lounge" element={<Lounge />} />
                <Route path="/travelers" element={<Travelers />} />
                <Route path="/subscribers" element={<Subscribers />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/complain" element={<Complain/>}/>
                <Route path="/information" element={<Information/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
            <Footer />
        </Router>
    </div>
  );
};

export default App;
