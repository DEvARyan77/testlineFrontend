import React from 'react';
import { useEffect } from 'react';
import './Signup.css';
import UntitledDesign from '../src/Image/untitled_design.png';
import UntitledDesign1 from '../src/Image/untitled_design1.png';
import UntitledDesign2 from '../src/Image/untitled_design2.png';
import Bear from '../src/Image/bear.png';

function Signup() {
  const getCookie = (name) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
    };
  
    useEffect(() => {
      const token = getCookie('token');
      if (token) {
        window.location.href = '/';
      }
    }, []);
  function handleSubmit(e){
    e.preventDefault();
    const username = document.querySelector('input[type="text"]').value;
    const email = document.querySelectorAll('input[type="text"]')[1].value;
    const password = document.querySelectorAll('input[type="password"]')[0].value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(password==='' || username==='' || email===''){
      alert('Empty Fields');
      return;
    }
    if(password.length<8){
      alert('Password length is less than 8 characters')
      return;
    }
    if (!emailPattern.test(email)) {
      alert('Invalid email format');
      return;
    }
    window.location.href = '/login';
  }

  function eyes(e){
    let inputLength = e.target.value.length;
    const maxLength = 32;
    const length = Math.min(inputLength, maxLength);
    let x = length * 1;
    const eyes = document.querySelectorAll('.eye');
    eyes.forEach((eye, index) => {
        eye.style.transform = `translate(${x - 10}px,5px)`;
      });
  }
  function down(){
    const eyes = document.querySelectorAll('.eye');
    eyes.forEach((eye, index) => {
        eye.style.transform = `translate(-5px, 5px)`;
      });
  }
  function up(){
    const eyes = document.querySelectorAll('.eye');
    eyes.forEach((eye, index) => {
        eye.style.transform = `translate(5px,-5px)`;
      });
  }

  return (
    <div id='Signup'>
      <div id='SignupPoster'>
        <div className="animated-images">
          <img src={UntitledDesign} alt="Untitled Design" className="image1" />
          <img src={UntitledDesign1} alt="Untitled Design 1" className="image2" />
          <img src={UntitledDesign2} alt="Untitled Design 2" className="image3" />
        </div>
      </div>
      <div id='SignupForm'>
        <img src={Bear} alt="Bear" className="bear" />
        <div className="eyes">
          <div className="eye left-eye"></div>
          <div className="eye right-eye"></div>
        </div>
        <form className="form-contents">
          <h2>Signup</h2>
          <input
            type="text"
            placeholder="Username"
            onChange={eyes}
            onClick={down}
            onBlur={up}
            required
          />
          <input
            type="text"
            placeholder="Email"
            onChange={eyes}
            onClick={down}
            onBlur={up}
            required
          />
          <input
            type="password"
            placeholder="Password"
            onChange={eyes}
            onClick={down}
            onBlur={up}
            required
            minLength={8}
          />
          <button type="submit" onClick={handleSubmit}>Signup</button>
          <p style={{color:'gray'}}>Have an acccount? <a href='/login'>Login</a></p>
        </form>
      </div>
    </div>
  );
}

export default React.memo(Signup);