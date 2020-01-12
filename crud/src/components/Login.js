import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';
import useForm from '../hooks/useForm.js';

import styled from 'styled-components';

import { Form, Button, Checkbox } from 'semantic-ui-react';


const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    .login-form {
      width: 20%;
    }

    .button-container {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
    }

    .login-button {
      font-size: 1rem;
      padding: 0;
      width: 100px;
    }


    hr {
      color: orange;
      text-decoration: none;
      border: 0.5px solid orange;
      margin-bottom: 15px;
  }

  .register {
    font-size: 1.4rem;
  }
`;

export default function Login(props) {
  const [input, handleChange, clearForm, errors] = useForm();


  function handleSubmit(event) {
    event.preventDefault();
    axiosWithAuth().post('/login', input)
    .then(res => {
      console.log(res);
      localStorage.setItem('token', res.data.token);
      clearForm();
      props.history.push('/dashboard');
    })
    .catch(error => {
      console.log(error.response);
    })
  }

  return (
    <Container>
        <Form className='login-form' onSubmit={handleSubmit} >
          <Form.Input
            type="username"
            value={input.username}
            onChange={handleChange || ''}
            placeholder='Username'
          />
          <Form.Input
            value={input.password}
            type="password"
            onChange={handleChange || ''}
            placeholder='Password'
          />
          <div className='button-container'>
          <Form.Input control={Checkbox} label='Remember me' />
          <Button className='login-button' color='orange' type="submit">
            Login
          </Button>
          </div>
          <hr></hr>
        </Form>
          <div className='register'>Need to register an account? Click <Link to='/'>here</Link> to sign-up.</div>
    </Container>
  );
}