import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './login.jsx';
import Signup from './signup.jsx';
import Auth from './authentication.jsx';
import Navbar from './navbar.jsx';
import Footer from './footer.jsx';
import Video from './videoplayer.jsx';
import Courses from './courses.jsx';
import Navbarlogin from './navbarlogin.jsx';
import Coursesresume from './coursesresume.jsx';
import Aftercource from './aftercource.jsx';

function App() {
  return (
    <div>
      
       
    <Navbar />
    <Navbarlogin /> 
      
      
          <Login /> 
          <Signup /> 
          <Auth /> 
          <Courses />  
          <Video />
          <Coursesresume />
          <Aftercource />
          <Footer /> 
         


        </div>
      
  );
}

export default App;