import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

// Apollo is a bit like redux in that we need to use a provider
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import 'react-alice-carousel/lib/alice-carousel.css'
import './carousel.css';
import 'semantic-ui-css/semantic.min.css'
import App from './App';


ReactDOM.render(
<Router>
    <App />
</Router>, document.getElementById('root'));

