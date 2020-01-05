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
            <h2>UserName:{props.name}</h2>
            <p>Comment: {props.comment}</p>
            <p>Score: {props.score}</p>
        
          </WrapperDiv>
          </>
        );
       }

export default Card;
