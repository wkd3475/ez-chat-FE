import "./App.css";
import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login, Chat } from './pages';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/chat" component={Chat}/>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;