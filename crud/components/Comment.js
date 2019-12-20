import React, {useState, useEffect} with 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import CommentCard from './CommentCard';

const Comment = (props) => {
    const {id} = useParams()
    const [comment, setComment] = useState();

    useEffect (() => {
        axios   
            .get (`https://reqres.in/api/users/${id}`)
            .then(response => {
                setComment(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    },[]);

    if(!comment) {
        return
            <div>Loading comments ...</div>;
    }

    return (
        <div className = "save-wrapper">
            <CommentCard comment= {comment} />
            <div className = "save-comment-btn">Save Comment</div>

        </div>
    );
}

export default Comment;
