import React, {useContext} from 'react';
import CommentContext from './CommentContext'; 

function DeleteComment () {
    const {comments, deleteComment} = useContext (CommentContext)
    console.log('kd:deletecomment:useContext', comments)

    return (
        <>
            {comments.map (comment => (
                <div>
                    <h3>Username: {comment.username}</h3>
                    <br></br>
                    <h3>Score: {comment.score}</h3>

                    <button className = 'remove-comment-btn'
                        onClick = {() => deleteComment (comment.id)}
                        >
                            Delete Comment
                        </button>
                        <hr></hr>
                        <br></br>
                </div>
            ))}
        </>
    )
}

export default DeleteComment;