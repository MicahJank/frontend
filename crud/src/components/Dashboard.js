import React, {useState} from 'react';
import styled from 'styled-components';
import SaltFeed from './SaltFeed.js';
// import SearchForm from './SearchForm.js';
import UpdateUsername from './UpdateUsername.js';

const Wrapper = styled.div`
margin-top:3%;
width:30%;
border:1px solid grey;
box-shadow: 5px 5px 5px black;
margin-left:35%;
`

// dashboard component is what should display things like the cards containing the DS api data
const Dashboard = () => {
    const [currentUser, setCurrentUser] = useState(localStorage.getItem('username'));

    return (
        <>
        <Wrapper>
                <UpdateUsername setCurrentUser={setCurrentUser} /> 
                <h4>Welcome to your Salty Comment Dashboard, {currentUser}.</h4>
        </Wrapper>   
        <SaltFeed />
        </>
    )
}


export default Dashboard;
