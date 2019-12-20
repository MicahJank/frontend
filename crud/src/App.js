import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';

import Comment from './components/Comment';
import CommentList from './components/CommentList';
import SavedCommentsList from './components/SavedCommentsList';

class App extends React.Component {
    constructor() {
      super()
      this.state = {
        savedList: [],
        commentInList: null
      };
    }

  addToSavedList = comment => {
    const savedList = this.state.savedList;
    const findComment = this.savedList.find
      (el => comment.id === el.id);

      if (findComment) {
        this.setSate ({commentInList : `You've already saved that comment!` });
        setTimeout(() => this.setState ({commentInList: null}), 2000);
      } else {
        savedList.push(comment);
      }

        this.setState({savedList})
  };

  render () {
    const {commentInList} = this.state;
    return (
      <div>
        {commentInList !==null ? (
          <h2 className = "saved-warning">{commentInList}</h2>
        ) :null}

        <SavedCommentsList list = {this.state.savedList} />
        <Route exact path = '/' component = {CommentList} />

        <Route path = '/users/:id'
          render = {props => (
            <Comment {...props} addToSavedList = {this.addToSavedList} />
          )}
          />
    
      </div>
    );
  };
}


export default App;
