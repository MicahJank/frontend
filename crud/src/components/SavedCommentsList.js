import React from 'react';
import {NavLink} from 'react-router-dom';
const SavedCommentsList = props => (
    <div className = "saved-list">
        <h3>Saved Comments:</h3>
            {props.list.map(comment => (
                <span className = "saved-comment">{comment.id}</span>
            ))}
                
                <NavLink to = '/'>
                    <div className = "home-button">Home</div>
                </NavLink>
            
            
    </div>
);

export default SavedCommentsList;
