import React, {useContext} from 'react';
import CommentContext from './CommentContext'; 

function DeleteComment () {
    const {comments, deleteComment} = useContext (CommentContext)
    console.log('kd:deletecomment:useContext', comments)

    return (
        <>
            {comments.map (comment => (
                <div>
                   

                    <h2>Comment id: {comment.id}</h2>

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