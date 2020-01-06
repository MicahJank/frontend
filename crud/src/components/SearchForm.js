import React, { useState, useEffect } from "react";
import axios from 'axios'
import Card from "./Card";
import {Link} from "react-router-dom";
import styled from 'styled-components';

const Wrapper = styled.div`
    margin-left: 25%;
    padding:1%;
`

export default function SearchForm() {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(()=>{
    axios.get("https://rickandmortyapi.com/api/character/")
    .then (response =>{
        const characters = response.data.results.filter
        (character => 
        character.name.toLowerCase().includes(query.toLowerCase()));
    setData (characters)});
    },[query]);


const handleInputChange = event => {
  setQuery(event.target.value);
};
return (
  <div >
    <Wrapper className ="form-style">
    <form >
      <input
            id="name" 
            type="text" 
            name="textfield" 
            placeholder="Search"
            value={query} 
            onChange={handleInputChange}/>

        <button type="submit">Submit</button>
    </form>
    </Wrapper>

    {data.map((character => {
        return(
            <Card 
                key={character.id} 
                name={character.name} 
                comment={character.comment} 
                toxicity={character.toxicity}
            />)
    }))}

    </div>
)}