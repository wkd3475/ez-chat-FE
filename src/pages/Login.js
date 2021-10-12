import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
  const [inputName, setInputName] = useState('')

  const handleInputId = (e) => {
    setInputName(e.target.value);
  };

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
          <button className='btn' type='button'>Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;