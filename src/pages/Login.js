import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import { setCookie } from '../utils/cookie'

const Login = () => {
  const [inputName, setInputName] = useState('')

  const handleInputId = (e) => {
    setInputName(e.target.value);
  };

  const handleLogin = () => {
    setCookie('name', inputName);
  }

  return (
    <div className='wrapper'>
      <div className='container'>
        <h2>set your name</h2>
      </div>
      
      <div className='container'>
        <input className='text-box' type='text' name='input_name' value={inputName} onChange={handleInputId} />
      </div>
      <div className='container'>
        <Link to={`/chat`}>
          <button className='btn' type='button' onClick={handleLogin}>Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;