import React from 'react';
import { Switch, Route } from 'react-router-dom';
import WelcomePage from './WelcomePage';


const AppRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path = '/' component = {WelcomePage} /> 
     </Switch>
    </div>
  );
}

export default AppRouter; 