import React from 'react';
import { useEffect } from 'react';
import './Login.css';
import UntitledDesign from '../src/Image/untitled_design.png';
import UntitledDesign1 from '../src/Image/untitled_design1.png';
import UntitledDesign2 from '../src/Image/untitled_design2.png';
import Bear from '../src/Image/bear.png';

function Login() {
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
    const password = document.querySelectorAll('input[type="password"]')[0].value;
    if(password==='' || username===''){
      alert('Empty Fields');
      return;
    }
    if(password.length<8){
      alert('Password length is less than 8 characters')
      return;
    }
    window.location.href = '/';
  }
  function eyes(e){
    let inputLength = e.target.value.length;
    const maxLength = 32;
    const length = Math.min(inputLength, maxLength);
    let x = length * 1.2;
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
    <div id='Login'>
      <div id='LoginPoster'>
        <div className="animated-images">
          <img src={UntitledDesign} alt="Untitled Design" className="image1" />
          <img src={UntitledDesign1} alt="Untitled Design 1" className="image2" />
          <img src={UntitledDesign2} alt="Untitled Design 2" className="image3" />
        </div>
      </div>
      <form id='LoginForm'>
        <img src={Bear} alt="Bear" className="bear" />
        <div className="eyes">
          <div className="eye left-eye"></div>
          <div className="eye right-eye"></div>
        </div>
        <div className="form-contents">
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            onChange={eyes}
            onClick={down}
            onBlur={up}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={eyes}
            onClick={down}
            onBlur={up}
          />
          <button type="submit" onClick={handleSubmit}>Login</button>
          <p style={{color:'gray'}}>Don't have an acccount? <a href='/signup'>Signup</a></p>
        </div>
      </form>
    </div>
  );
}

export default React.memo(Login);