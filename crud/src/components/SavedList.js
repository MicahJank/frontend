import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import DeleteComment from './components/DeleteComment';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Comments:</h3>
    {props.list.map(comment => (
      <NavLink key = {comment.id} to {`/Comments/${comment.id}`}>
      <span className="saved-comment">{comment.username}</span>
      </NavLink>
    ))}

    <DeleteComment />
    <hr/>
    <Link to='/'><div className="home-button">Dashboard</div></Link>
     
  </div>
);

export default SavedList;