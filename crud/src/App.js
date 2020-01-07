import React from "react";
import Navigation from './components/Navigation.js';
import styled from "styled-components"
import Login from "./components/Login";
// import Card from './components/Card';
// import SaltFeed from './components/SaltFeed';
import { Route } from "react-router-dom";


const WrapperDiv = styled.div`
  
`;



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