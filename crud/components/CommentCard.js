import React from 'react';
import {Link} from 'react-router-dom';

const CommentCard = props => {
    const {id, first_name, last_name, email} = props.comment

    return (
        <Link to={{pathname:`users/${id}`}}>
            <div className = "comment-card">
                <h2>First Name: {first_name}</h2>
                <h2>Last_Name: {last_name}</h2>
                <h3>email:{email}</h3>
            </div>
        </Link>
    )
};

export default CommentCard;