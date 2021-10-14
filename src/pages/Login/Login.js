import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Login.css'
import {setCookie} from '../../utils/cookie'

const Login = () => {
    const [inputName, setInputName] = useState('')

    const handleInputId = (e) => {
        setInputName(e.target.value);
    };

    const handleLogin = () => {
        setCookie('name', inputName);
    }

    return (
        <div className='login-wrapper'>
            <div className='login-body'>
                <div className='login-top-container'>
                    <h2>set your name</h2>
                </div>
                <div className='login-mid-container'>
                    <input
                        className='login-text-box'
                        type='text'
                        name='input_name'
                        value={inputName}
                        onChange={handleInputId}/>
                </div>
                <div className='login-bottom-container'>
                    <Link to={`/chat`}>
                        <button className='login-btn' type='button' onClick={handleLogin}>Login</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;