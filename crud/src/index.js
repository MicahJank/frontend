import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import 'react-alice-carousel/lib/alice-carousel.css'
import './carousel.css';
import 'semantic-ui-css/semantic.min.css'
import App from './App';


ReactDOM.render(
<Router>
    <App />
</Router>, document.getElementById('root'));

