import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import {withRouter} from 'react-router-dom';
import {Wrapper, Form, Input, Button} from './styles/RegistrationStyles'; 


class Registration extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }; 

    handleChange = event => {    
        this.setState ({
            credentials: {
                ...this.state.credentials,
                [event.target.name]: event.target.value
            }
        });
    };

    login = event => {
        event.preventDefault();
        axiosWithAuth()
            .post('/register', this.state.credentials)
            .then(response => {
                console.log('kd:registration:login:axios:then', response.data)
                localStorage.setItem('token', response.data.token);
                // this.props.history.push('/login');
                this.setState ({ credentials: {
                    username: '',
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
                        name = 'username'
                        value = {this.state.credentials.username || ''}
                        onChange = {this.handleChange}
                        placeholder = '* username'
                        />

                        <br></br>


                    <Input
                        type = 'password'
                        name = 'password'
                        value = {this.state.credentials.password || ''}
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