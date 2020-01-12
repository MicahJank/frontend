import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import {withRouter, Link} from 'react-router-dom';

import { Form, Button, Message } from 'semantic-ui-react';

import styled from 'styled-components';

import useForm from '../hooks/useForm.js';


const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    h1 {
        font-size: 3rem;
        color: #FF6600;
        }
        
    .register-form {
        width: 20%;
        margin: 0 auto;
    }

    hr {
        color: orange;
        text-decoration: none;
        border: 0.5px solid orange;
        margin-bottom: 15px;
    }

    .register-button .ui.button {
        padding: 10px;
        height: auto;
        font-size: 1.3rem;
    }


    
`;

const Registration = (props) => {

    const [state, handleChange, clearForm, errors] = useForm();
    const [responseError, setResponseError] = useState('');
    const [loading, setLoading] = useState(false);


    const submitHandler = event => {
        event.preventDefault();

        if(state.username && state.email && state.password) {
            setResponseError('');
            setLoading(true);
            axiosWithAuth()
            .post('/register', state)
            .then(response => {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('username', response.data.created_user.username); 
                clearForm();
                setLoading(false);
                props.history.push('/dashboard'); 
            })
                .catch (error => {
                    setLoading(false);
                    setResponseError(error.response.data.message)
                });
        } else {
            setResponseError('Please provide a username, email and password.');
        }
        
    };

        
        return (
            <Container>
            <h1>Hacker News Rankings</h1>
            <Form className='register-form' size='big' loading={loading} onSubmit={submitHandler}>
                    <Form.Input
                        error={errors.username}
                        type = 'text'
                        name = 'username'
                        value = {state.username || ''}
                        onChange = {handleChange}
                        placeholder = '* username'
                        />

                        <Form.Input
                        error={errors.email}
                        type = 'email'
                        name = 'email'
                        value = {state.email || ''}
                        onChange = {handleChange}
                        placeholder = '* email'
                        />



                    <Form.Input
                        error={errors.password}
                        type = 'password'
                        name = 'password'
                        value = {state.password || ''}
                        onChange = {handleChange}
                        placeholder = '* password'
                        />
                        <hr></hr>
                    <Form.Button
                        className='register-button'
                        color='orange' 
                        type = 'submit'
                        size='massive'
                        >Register
                    </Form.Button>

                    <br></br>
                   
                </Form>
                {responseError ? <Message className='errorMessage' error header='Unable to register' content={responseError} /> : ''}
                    <div>
                        <div>Already registered? Click <Link to='/login'>here</Link> to login</div>
                    </div>
            </Container>
        );
}

export default Registration;