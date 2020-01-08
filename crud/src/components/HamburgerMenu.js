import React from 'react';

import { Link, Route, Redirect } from 'react-router-dom';

import styled from 'styled-components';

const Menu = styled.div`
    position: absolute;
    top: 50px;
    left: 50px;
    display: ${props => props.hidden === true ? 'none' : 'flex'}
    flex-direction: column;
    background-color: grey;
    z-index: 1;
    width: 200px
    border: 1px solid lightgrey;

    button {
       width: 100%;
       border: none;
       border-bottom: 1px solid black;
       border-radius: 0;
       cursor: pointer;
       text-align: left;

       :hover {
           background-color: darkgrey;
       }
    }
`;


const HamburgerMenu = props => {

    const logout = () => {
        localStorage.clear();
        
    }

    return (
        <Menu hidden={props.hidden}>
            <button>Update Username</button>
            <button>Logout</button>
        </Menu>

    )
}


export default HamburgerMenu;