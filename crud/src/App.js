import React from "react";
import Navigation from './components/Navigation.js';
import styled from "styled-components"
import Login from "./components/Login";
// import Card from './components/Card';
// import SaltFeed from './components/SaltFeed';
// import { Route } from "react-router-dom";
import { Route } from "react-router-dom";


const WrapperDiv = styled.div`
width: 100%;
height: 600px;
display: flex;
align-items: center;
justify-content: center;
box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
border: 2px solid black;
  
`;


const App = () => {
  return (
    <>
      <section className = "welcome-page">
      <Navigation /> 
      </section>
    </>
  );
}
export default App;