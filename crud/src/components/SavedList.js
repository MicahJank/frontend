import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import DeleteComment from './components/DeleteComment';

function SavedList (props) {

  return (
    <div className="saved-list">
      <h3>Saved Comments:</h3>
      {props.list.map(comment => {
        return (
          <NavLink
            to={`/comments/${comment.id}`}
            key={comment.id}
            activeClassName="saved-active"
          >
            <span className="saved-comments">{comment.id}</span>
          </NavLink>
        );
      })}
      <div>
        <DeleteComment />
      </div>
      
      <div className="home-button">
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}


export default SavedList;