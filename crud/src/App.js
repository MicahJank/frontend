import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import Navigation from './components/Navigation';
import Registration from './components/Registration';
import PrivateRoute from './components/PrivateRoute.js';
import Login from './components/Login.js';
import Dashboard from './components/Dashboard.js';


// import styled from "styled-components"
// const WrapperDiv = styled.div`
// width: 16.5%;
// margin-left: 43%;
//  box-shadow: 5px 5px 5px black;
// `;



function App() {
  return (
    <Router>
    <div className="App">
      <h1 className="pageTitle">BucketArr</h1>
        <Switch>
          <Route exact path="/" component={Registration}/>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/dashboard" component={Dashboard} /> 
        </Switch>
    </div>
    </Router>
  );
}

          {/* <WrapperDiv className = "welcome-ds">
            <img className ="main-img"
              src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="rick" />
          </WrapperDiv> */}
          
  
export default App;