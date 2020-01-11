import React, { useState } from "react";
import { Route, Switch } from 'react-router-dom';

import Registration from './components/Registration';
import PrivateRoute from './components/PrivateRoute.js';
import Login from './components/Login.js';
import Dashboard from './components/Dashboard.js';
import Navigation from './components/Navigation.js';

import CommentContext from './components/CommentContext';


import './App.css';


function App() {
  const [comments]= useState ([])

  return (
    <CommentContext.Provider value={{comments}}>
      <div className="App">
        <PrivateRoute path={['/dashboard', '/search', '/saved']} component={Navigation} /> 
          <Switch>
            <Route exact path="/" component={Registration}/>
            <Route path="/login" component={Login} />
            <PrivateRoute path="/dashboard" component={Dashboard} /> 
          </Switch>
      </div>
    </CommentContext.Provider>
  );
}     
  
export default App;