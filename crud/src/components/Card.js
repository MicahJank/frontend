import React from "react";
import styled from "styled-components";
// import SearchForm from './SearchForm';

const WrapperDiv= styled.div`
  width: 100%;
  height: 30%;
   margin: 5%;
 
  border: 1.5px solid grey;
  padding: 3%;
  padding-left: 10%;
  font-family: The Wild Hammers;
  background-color: lightgrey;
  box-shadow: 5px 5px 5px black;
  `

const Card = (props) => {
  return (
         <>
    
          <WrapperDiv className="cards">
            <h2>Name:{props.name}</h2>
            <p>Species: {props.species}</p>
            <p>Status: {props.status}</p>
            <p>Location: {props.location}</p>
        
          </WrapperDiv>
          </>
        );
       }

export default Card;
