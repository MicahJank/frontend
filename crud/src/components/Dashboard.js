import React, {useState, useEffect} from 'react';
import {Route} from 'react-router-dom';
import axiosWithAuth from './utils/axiosWithAuth';
import SaltFeed from './components/SaltFeed';
import SavedList from './components/SavedList';
import UpdateUsername from './components/UpdateUsername';
import styled from 'styled-components';

const Container = styled.div`
    width: 75%;
    background-color:slategrey;
`

function Dashboard () {
    const [currentUser, setCurrentUser] = useState({});
    
    useEffect(() => {
        axiosWithAuth()
        .get('/user')
        .then(response => {
            console.log("User:", response);
            setCurrentUser(response.data.username);
        })
        .catch(error => console.log(error))
    }, [])

    if (!currentUser.username){
        return (
            <h2>Loading User ... </h2>
        )
    }
    return (
        <>
        <Container>
            <div className = "dashboard-header">
                <h1>Welcome to your Salty Comment Dashboard. {currentUser.username}</h1>
            </div>

            <div className = "update-section">
                <UpdateUsername /> 
            </div>
        </Container>
       
    <Route exact path ="/dashboard" 
        render = {props => <SaltFeed {...props} 
        username = {currentUser.username}/>}
    />
    <Route path = "/dashboard/savedlist" component = {SavedList} />
        </>
    )
}

export default Dashboard; 