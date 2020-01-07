import React from 'react';
import { Link } from 'react-router-dom'

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Comments:</h3>
    {props.list.map(comment => (
      <span className="saved-comment">{comment.username}</span>
    ))}
    <Link to='/'><div className="home-button">Home</div></Link>
  </div>
);

export default SavedList;