import React from "react";
import { Route, Switch } from 'react-router-dom';

// import Navigation from './components/Navigation';
import Registration from './components/Registration';
import PrivateRoute from './components/PrivateRoute.js';
import Login from './components/Login.js';
import Dashboard from './components/Dashboard.js';
import Navigation from './components/Navigation.js';

import './App.css';


// import styled from "styled-components"
// const WrapperDiv = styled.div`
// width: 16.5%;
// margin-left: 43%;
//  box-shadow: 5px 5px 5px black;
// `;


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
    <CommentContext.Provider value={{comments,deleteComment}}>
      <div className="App">
        <PrivateRoute path={['/dashboard', '/search', '/saved']} component={Navigation} /> 
          <Switch>
            <Route path = '/crud' component ={SaveComment} />
            <Route exact path="/" component={Registration}/>
            <Route path="/login" component={Login} />
            <PrivateRoute path="/dashboard" component={Dashboard} /> 
          </Switch>
      </div>
    </CommentContext.Provider>
  );
}     
  
export default App;