import React from 'react';
import { Link, Route } from 'react-router-dom';
import styled from "styled-components";
import SaltFeed from './SaltFeed';
import Login from './Login';
import List from './List';

const WrapperDiv = styled.div `
display: flex;
justify-content: center;
justify-content: space-evenly;
font-size: 3rem;
border-bottom: 2px solid black;
padding-bottom: 20px;
`

const Container = styled.div`
width: 100%;
display:flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
`

const Navigation = () => {
  return (
    <>
    <WrapperDiv className = "NavWrap">
          <Link to ="/" style={{ textDecoration: 'none', color: 'black' }}>Salt Feed</Link>
          <Link to ="/characters" style={{ textDecoration: 'none' , color: 'black' }}>User Search </Link>
          <Link to ="/login" style={{ textDecoration: 'none' , color: 'black' }}>Login </Link>
    </WrapperDiv>

    <Container>
          <Route path ='/characters' component = {List} />
          <Route exact path ='/'component = {SaltFeed} />
          <Route path="/login" exact component={Login} />
    </Container>
          </>
   
  )};


 export default Navigation;