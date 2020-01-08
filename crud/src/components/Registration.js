import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import {withRouter, Link} from 'react-router-dom';
import {
    Wrapper, 
    Form, 
    Input, 
    Button, 
    Container,
    SubTitle,
    NavLink
    } from '../styles/RegistrationStyles'; 


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
                localStorage.setItem('username', response.data.created_user.username); // when we register we can grab the users current username and send it to local storage to dsiplay in the app when we want
                this.props.history.push('/dashboard'); // after the user registers it makes more sense for them to get directed straight to the dashboard rather than the login correct?
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
                    <hr></hr>
                    <Container>
                        <SubTitle>Already registered? Click <Link to='/login'><NavLink>here</NavLink></Link> to login</SubTitle>
                    </Container>
                   
                    

                </Form>
            </Wrapper>
        );
    }
    
}

export default withRouter (Registration);