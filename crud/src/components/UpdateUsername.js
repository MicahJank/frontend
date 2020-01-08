import React, {useState} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const initialUser= {
    username: '',
}

function UpdateUsername() {

    const [user, setUser] = useState(initialUser);

    // const {match, users} = props;
    // useEffect (() => {
    //     const username = match.params.username;
    //     const userToUpdate = users.find(item => `${item.username}` === username);
        
    //     if (userToUpdate) {
    //         setUser(userToUpdate);
    //     }
    // }, [match, users]);

    const changeHandler = event => {
        event.persist();
        let value = event.target.value;

        // setUser({
        //     ...users, 
        //     [event.target.name] : value
        // })
    }

    const handleSubmit = event => {
        event.preventDefault();
        axiosWithAuth()
            .put(`https://hacker-news-troll.herokuapp.com/api/users`, user) // axiosWithAuth is already using the base URL so you should only need /users
            .then (response => {
                console.log(response)
                setUser(initialUser)
                // props.history.push('/')
            })
            .catch(error => {console.log(error)})
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