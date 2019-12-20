import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';
import CommentCard from './CommentCard';

const CommentList = props => {
    const [comments, setComments] = useState([])

    useEffect (()=> {
        const getComments = () => {
            axios   
                .get (`https://reqres.in/api/users/`)
                .then(response => {
                    setComments(response.data);
                })
                .catch(error => {
                    console.log("catch error", error);
                });
        }

        getComments();
    }, []);

    return (
        <div className = "comment-list">
            {comments.map(comment => (
                <CommentDetails
                    key = {comment.id}
                    comment = {comment}
                    />
            ))}
        </div>
    );
}

function CommentDetails ({comment}) {
    const {id} = comment;

    return (
       <NavLink to ={`/users/${id}`}>
        <CommentCard comment = {comment} />
        </NavLink>
    )
}

export default CommentList;