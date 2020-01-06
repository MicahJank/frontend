import React, { useState } from "react";
import { Link } from 'react-router-dom';
// import styled from 'styled-components';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Login.css";



export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <FormLabel>Email</FormLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
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
        <Button class="login" block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
        {/* </ButtonStyle> */}
      </form>
    </div>
  );
}