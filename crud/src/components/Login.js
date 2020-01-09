import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';
// import styled from 'styled-components';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Login.css";



export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    axiosWithAuth().post('/login', {username, password})
    .then(res => {
      localStorage.setItem('token', res.data.token);
      props.history.push('/dashboard');
      console.log(res);
    });
    console.log('Success!');
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="username" bsSize="large">
          <FormLabel>Username</FormLabel>
          <FormControl
            autoFocus
            type="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <FormLabel>Password</FormLabel>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        {/* <ButtonStyle> */}
        <Button className="login" block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
        {/* </ButtonStyle> */}
      </form>
    </div>
  );
}