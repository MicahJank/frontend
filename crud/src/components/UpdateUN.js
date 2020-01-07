import React, {useState} from 'react';
import axiosWithAuth from './utils/axiosWithAuth';
import Registration from './compoments/Registration'

const initialUser = {

};

const UpdateUN = ({registration, setRegistration}) => {
    const [editing, setEditing] = useState(false);
    const [registrationToEdit, setRegistrationToEdit] = useState(initialUser);

    const editRegistration = registration => {
        setEditing(true);
        setRegistrationToEdit(registration);
    };

    const saveEdit = event => {
        event.preventDefault();

        axiosWithAuth()
        .put(`/user/registration/${registrationToEdit.username}`, registrationToEdit)
        .then (response => {
            setRegistration (
                registration.map(registration => {
                    if (registration.user === registrationToEdit.user) {
                        return registrationToEdit;
                
                    } else return registration;
                })
            )
        })
        .catch(error => console.log(error))
    };

    return (
        <>
        {registration.map (registration => 
            <Registration key = {registration.user} registration = {registration}>
                                    
                <h2 onClick = {() => editRegistration(registration)}
                    >Edit UserName</h2>
            </Registration>)
        }

        {editing && (
            <form onSubmit = {saveEdit}>
                <legend>Edit UserName</legend>
                <label>
                    UserName: 
                        <input 
                            value = {registrationToEdit}
                            onChange = {event => setRegistrationToEdit 
                                ({...registrationToEdit, registration: event.target.value})}
                        />
                </label>
                <button type = "submit">Save Changes</button>
                <button onClick = {() => setEditing(false)}>Cancel Change</button>
            </form>
        )}
        </>
    )
}

export default UpdateUN;