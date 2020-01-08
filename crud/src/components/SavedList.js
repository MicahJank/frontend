import React, {useState, useEffect} from 'react';
import axiosWithAuth from './utils/axiosWithAuth';
import { Link } from 'react-router-dom';
import DeleteComment from './components/DeleteComment';

function SavedList () {

  const [savedComments, setSavedComments]= useState ([])

    useEffect (() => {
      const getSavedComments = () => {
        axiosWithAuth()
        .get(`/api/comments`)
        .then (response => {
          setSavedComments(response.data);
        })
        .catch(error=> console.log(error))
      }
      getSavedComments();
    }, [])
   


  return (
    <>
    <div className="saved-list">
      <h3>Saved Comments:</h3>
      {savedComments.map(comment => (
          <Link to={`/comments/${comment.id}`} key={comment.id}></Link>
        ))}
    </div>
    </>
  );
}

function SavedCommentDetails ({savedComment}) {
  const {troll_username, comment_toxicity, comment} = savedComment; 

  return (
    <>
    <div className = "saved-comment-card">

        <div className = "troll-username">
          <h2>Username: {troll_username}</h2>
        </div>

        <div className = "toxicity">
          <h3>Toxicity Score: {comment_toxicity}</h3>
        </div>    

        <div className = "comment">
          <p>Comment: {comment}</p>
        </div>
    
    </div>

    <div>
      <DeleteComment />
    </div>

    <div className="home-button">
      <Link to="/">Home</Link>
    </div>
  </>
  )
}


export default SavedList;