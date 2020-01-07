import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import {withRouter} from 'react-router-dom';
import {Wrapper, Form, Input, Button} from './styles/RegistrationStyles'; 


class Registration extends React.Component {
    state = {
        credentials: {
            name: '',
            email: '', 
            password: ''
        }
    }; 

    handleChange = event => {
        this.setState ({
            credentials: {
                ...this.setState.credentials,
                [event.target.name]: event.target.value
            }
        });
    };

    login = event => {
        event.preventDefault();
        axiosWithAuth()
            .post('https://hacker-news-troll.herokuapp.com/api/register', this.state.credentials)
            .then(response => {
                console.log('kd:registration:login:axios:then', response.data)
                localStorage.setItem('token', response.data.token);
                this.props.history.push('/login');
                this.setState ({ credentials: {
                    name: '',
                    email: '',
                    password: ''
                }});
            })
                .catch (error => console.log ('kd:registration:login:axios.catch', error));
    };

    render() {
        return (
            <Wrapper>
                <Form onSubmit = {this.login}>
                    <Input
                        type = 'text'
                        name = 'name'
                        value = {this.state.credentials.name}
                        onChange = {this.handleChange}
                        placeholder = '* name'
                        />

                        <br></br>

                    <Input
                        type = 'email'
                        name = 'email'
                        value = {this.state.credentials.email}
                        onChange = {this.handleChange}
                        placeholder = '* email'
                        />

                        <br></br>

                    <Input
                        type = 'password'
                        name = 'password'
                        value = {this.state.credentials.password}
                        onChange = {this.handleChange}
                        placeholder = '* password'
                        />
                        <br></br>

                    <Button 
                        type = 'submit'
                        >Register
                        </Button>

                </Form>
            </Wrapper>
        );
    }
    
}

export default withRouter (Registration);