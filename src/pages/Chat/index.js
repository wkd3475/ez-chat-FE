import React from 'react';
import {removeCookie, getCookie} from '../../utils/cookie'
import './index.css'

const Chat = () => {
    const name = getCookie('name');

    const handleLogout = () => {
        removeCookie('name', name);
        window
            .location
            .replace("/login");
    };
    return (
        <div className='chat-wrapper'>
            <div className='chat-body'>
                <div className='chat-top-container'>
                    <h2>Name : {getCookie('name')}</h2>
                    <button className='chat-btn' onClick={handleLogout}>Logout</button>
                </div>
                <div className='chat-mid-container'>
                    <h2>display messages</h2>
                </div>
                <div className='chat-bottom-container'>
                    <input className='chat-input'></input>
                    <button type='text'>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Chat;