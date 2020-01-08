import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CommentContext from './components/CommentContext';
import SaveComment from './components/SaveComment';
import SaltFeed from './components/SaltFeed'

import PrivateRoute from './components/PrivateRoute.js';
import Login from './components/Login.js';
import Registration from './components/Registration';
import axiosWithAuth from './utils/axiosWithAuth';

// import styled from "styled-components"


// const WrapperDiv = styled.div`
// width: 16.5%;
// margin-left: 43%;
//  box-shadow: 5px 5px 5px black;
// `;

function App() {
  const [comments, setComments]= useState ([])

  const deleteComment = commentId => {
    axiosWithAuth()
      .delete(`/api/comments/${commentId}`)
      .then (response => {
        setComments(comments.filter (data => data.id !==comments.id, response));
      })
      .catch(error=> console.log(error))
  };

  return (
    <>
    <Router>
        <CommentContext.Provider value={{comments,deleteComment}}>
        <div className="App">

            <Switch>
              <Route path = '/crud' component ={SaveComment} />
              <PrivateRoute path="/" component={SaltFeed} />
              <Route component={Login} />
              <Route component={Registration}/>
            </Switch>
        </div>
        </CommentContext.Provider>
    </Router>
    </>
  );
}

         
          
  
export default App;