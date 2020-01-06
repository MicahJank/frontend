import React from "react";
import Navigation from './components/Navigation.js';
import styled from "styled-components"
import Login from "./components/Login";
// import Card from './components/Card';
// import SaltFeed from './components/SaltFeed';
import { Route } from "react-router-dom";


const WrapperDiv = styled.div`
  
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