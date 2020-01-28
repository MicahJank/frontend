import React, {useContext} from 'react';
import CommentContext from './CommentContext'; 
import styled from 'styled-components';

const Button = styled.button`
    padding: 3px;
    color: #e3e2e0;
    border-radius:4px;
    border: 2px solid black;
    font-family:The Wild Hammers;

    margin: 10px;
    height: 35px;
    display: flex;
    align-items: baseline;
    background-color: #454245;
    
    &:hover{
        background: #a5c3c6;
    }
`;

function DeleteComment (props) {
    const {comments, deleteComment} = useContext (CommentContext)
    console.log('kd:deletecomment:useContext', comments)
    console.log(props.comment)

    return (
        
            <Button className = 'remove-comment-btn'
                    onClick = {() => deleteComment (props.comment.id)}
                    >Delete Comment
            </Button>
                
    )
}

export default DeleteComment;