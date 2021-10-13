import React from 'react';
import { getCookie } from '../utils/cookie'
import './Chat.css'

const Chat = () => {
  return (
    <div className='wrapper'>
      <div className='body'>
        <div className='top-container'>
          <h2>Name : {getCookie('name')}</h2>
          <button className='btn'>Logout</button>
        </div>
        <div className='mid-container'>
          <h2>display messages</h2>
        </div>
        <div className='bottom-container'>
          <h2>input message</h2>
        </div>
      </div>
    </div>
  );
}

export default Chat;