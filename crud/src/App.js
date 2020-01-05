import React from "react";
import Navigation from './components/Navigation';
import Registration from './components/Registration';
// import styled from "styled-components"


// const WrapperDiv = styled.div`
// width: 16.5%;
// margin-left: 43%;
//  box-shadow: 5px 5px 5px black;
// `;


const App = () => {
  return (
    <>
      <section className = "welcome-page">
      <Navigation /> 
          <header>
            <h1><center>Comment Trolls!</center></h1>
            <h3><center><em>Where Comments are Salty & Lemons Can't be Found</em></center></h3>
          </header>

          <Registration />

          {/* <WrapperDiv className = "welcome-ds">
            <img className ="main-img"
              src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="rick" />
          </WrapperDiv> */}
          
      </section>

        {/* <Navigation />  */}
        {/* <AppRouter /> */}
    </>
  );
}
export default App;