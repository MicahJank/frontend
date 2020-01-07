import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Navigation from './components/Navigation';
import Registration from './components/Registration';
import PrivateRoute from './components/PrivateRoute.js';
import Login from './components/Login.js';
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
          <PrivateRoute path="/" component={Login} />
          <Route component={Login} />
          <Route component={Registration}/>
        </Switch>
    </div>
    </Router>
  );
}

         
          
  
export default App;