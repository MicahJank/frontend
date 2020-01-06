import React from "react";
import styled from "styled-components";
// import SearchForm from './SearchForm';

const WrapperDiv= styled.div`
padding: 20px;
border-radius: 20px;
Width: 500px;
height: 50%;
border: 2px solid black;
box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`

const Card = (props) => {
  return (
         <>
    
          <WrapperDiv className="cards">
            <h2>Username: {props.name}</h2>
            <p>Comment: {props.commment}</p>
            <p>Toxicity: {props.toxicity}</p>
          </WrapperDiv>
          </>
        );
       }

export default Card;
