import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import styled from 'styled-components';
import {Link} from "react-router-dom";
import SearchForm from './SearchForm';

const Wrapper = styled.div`
  margin-top: 5%;

`



export default function List() {


  const [character, setCharacter] = useState([]);
  useEffect(() => {
    
  axios
     .get('https://rickandmortyapi.com/api/character/')
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
        <Link to= "/"><button>Home</button></Link>
        <Link to="/Search"><button>Search</button></Link>

       {character.map(index => (
             <Card  
                key={index.id} 
                name={index.name}
                species={index.species} 
                status={index.status} />

       ))}

       
       
     </div>
     </>

   );
 }