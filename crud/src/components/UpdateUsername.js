import React, {useState} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const initialUser= {
    username: '',
}

function UpdateUsername(props) {
    const [user, setUser] = useState(initialUser);

    const changeHandler = event => {
        event.persist();
        let value = event.target.value;

        setUser({
            ...user, 
            [event.target.name] : value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        axiosWithAuth()
            .put(`/users`, user)
            .then (response => {
                props.setCurrentUser(response.data.username);
                setUser(initialUser)
            })
            .catch(error => {console.log(error.message)})
    }

    return (
        <>
        <div className = "update-user-form">
            <h3>Update Username</h3>
            <form onSubmit = {handleSubmit}>
                <input
                    type = "text"
                    name = "username"
                    placeholder = "New Username"
                    onChange = {changeHandler}
                    value = {user.username}
                />

                <button type = "submit">Update Username</button>
            </form>
        </div>
        </>
    )
}

export default UpdateUsername;