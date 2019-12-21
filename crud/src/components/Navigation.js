import React from 'react';
import { Link, Route } from 'react-router-dom';
import styled from "styled-components";
import List from './List';

const WrapperDiv = styled.div `
display:flex;
flex-direction: column;
// justify-content: space-around;
align-items: center;
padding-bottom: 5%;
font-family: The Wild Hammers;
font-size: 20px;
font-weight: bold;
`

const Container = styled.div`
width: 50%;
display:flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
`

const Navigation = () => {
  return (
    <>
    <WrapperDiv className = "NavWrap">
          <Link to ="/">Home</Link>
          <Link to ="/characters">Characters </Link>
    </WrapperDiv>

    <Container>
          <Route path ='/characters' component = {List} />
    </Container>
          </>
   
  )};


 export default Navigation;