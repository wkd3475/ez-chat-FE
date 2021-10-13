import React from 'react';
import { getCookie } from '../utils/cookie'
import './Chat.css'

const Chat = () => {
  return (
    <div className='wrapper'>
      <h2>Chat Page : {getCookie('name')}</h2>
    </div>
  );
}

export default Chat;