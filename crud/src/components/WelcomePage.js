import React from "react";
import styled from "styled-components"


const WrapperDiv = styled.div`
width: 16.5%;
margin-left: 43%;
 box-shadow: 5px 5px 5px black;
`;

const WelcomePage = () => {
  return (
   
    <section className = "welcome-page">

      <header>
        <h1><center>Comment Trolls!</center></h1>
        <h3><center><em>Where Comments are Salty & Lemons Can't be Found</em></center></h3>
      
      <WrapperDiv className = "welcome-ds">
        <img className ="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="rick" />
      </WrapperDiv>
      </header>
    </section>
  );
}
export default WelcomePage;