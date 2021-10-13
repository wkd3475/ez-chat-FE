import "./App.css";
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Login, Chat } from './pages';
import { getCookie } from './utils/cookie'

const App = () => {
  const name = getCookie('name');
  const isLoggedIn = (name === undefined ||  name === null ? false : true);
  return (
    <div className="App">
      <BrowserRouter>
        {isLoggedIn ? <Redirect to='/chat' /> : <Redirect to='/login' />}
        <Switch>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/chat" component={Chat}/>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;