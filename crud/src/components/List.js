import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import styled from 'styled-components';
import SearchForm from './SearchForm';

const Wrapper = styled.div`
  margin-top: 5%;
  margin: 0 auto;
  
`

function List() {
  const [character, setCharacter] = useState([]);
  useEffect(() => {
    
  axios
     .get('')
     .then((response) => {
       setCharacter(response.data.results);
       console.log(response);

     })
     .catch(error => {
       console.error('Server Error', error);
     });
 }, []);

   return (
     <>
     <Wrapper className = "search-design">
        <SearchForm />
      </Wrapper>

      <div className="character-list">

      {/* {character.map(index => (
             <Card  
                key={index.id} 
                name={index.name}
                species={index.species} 
                status={index.status} />
      ))} */}
      </div>
     </>

   );
 }

 export default List;