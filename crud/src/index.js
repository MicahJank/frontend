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

// notice this is very similar to redux in that we create something here (in this case a client instead of a store) and then
// we pass the client into the ApolloProvider down below
const client = new ApolloClient({
    uri: 'https://hacker-news-backend.herokuapp.com/graphql'
})


ReactDOM.render(
<Router>
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
</Router>, document.getElementById('root'));

