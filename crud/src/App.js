import React from "react";
import Navigation from './components/Navigation.js';
import AppRouter from './components/AppRouter.js';


const App = () => {
  return (
    <main>
        <Navigation /> 
        <AppRouter />
    </main>
  );
}
export default App;