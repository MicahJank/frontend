import React from "react";
import styled from "styled-components";
// import SearchForm from './SearchForm';

const WrapperDiv= styled.div`
padding: 20px;
border-radius: 20px;
width: 500px;
height: 50%;
border: 2px solid black;
margin: 20px 0 20px 0;
box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`
const ButtonBox = styled.div`
display: flex;
padding-top: 100px;
justify-content: space-evenly;
`


const Card = (props) => {
  return (
         <>
    
          <WrapperDiv className="cards">
            <h2>Username: {props.name}</h2>
            <p>Comment: {props.commment}</p>
            <p>Toxicity Score: {props.toxicity}</p>
            <ButtonBox>
            <button>Save Comment</button>
            <button>Share Comment</button>
            <button>Like</button>
            <button>Dislike</button>
            </ButtonBox>
            
          </WrapperDiv>
          </>
        );
       }

export default Card;
