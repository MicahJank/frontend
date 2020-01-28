import React, { useState, useEffect, useContext } from "react";
import axios from 'axios'
import Card from "./Card";
import {Link} from "react-router-dom";
import styled from 'styled-components';

import { SearchContext } from '../contexts/SearchContext.js';

import { Button, Form } from 'semantic-ui-react';

const Wrapper = styled.div`
    margin-left: 25%;
    padding:1%;
    margin-top: 20px;

    button {
        height: 53px;
    }

    .form {
        width: 600px;
        display: flex;

    }

    .field {
        width: 100%;
    }
   
`

export default function SearchForm() {
    const { setComments, setAuthor } = useContext(SearchContext);
    const [input, setInput] = useState('');
    // const [query, setQuery] = useState("");



const handleInputChange = event => {
  setInput(event.target.value);
};

const handleSubmit = () => {
    axios.post("https://unit3-build-dummy-api.herokuapp.com/author", { author: input })
    .then(res => {
        console.log("TCL: SearchForm -> res", res)
        setComments(res.data.top_ten_tox);
        setAuthor({
            name: res.data.author,
            avg_toxicity: res.data.avg_tox,
            rank: res.data.tox_rank
        });

    })
    .catch(err => {
        console.log(err);
    })
}
return (
  <div >
    <Wrapper className ="form-style">
    <Form onSubmit={handleSubmit} size='huge'>
        <Form.Field>
            <input
                id="name" 
                type="text" 
                name="textfield" 
                placeholder="Search"
                value={input || ''} 
                onChange={handleInputChange}/>
        </Form.Field>

        <Button size='huge' primary type="submit">Search</Button>
    </Form>
    </Wrapper>

    {/* {data.map((character => {
        return(
            <Card 
                key={character.id} 
                name={character.name} 
                comment={character.comment} 
                toxicity={character.toxicity}
            />)
    }))} */}

    </div>
)}