import React from 'react';
import SaltFeed from './components/SaltFeed';
import SavedList from './components/SavedList';
import UpdateUN from './components/UpdateUN';

function Dashboard () {

    return (
        <>
        <UpdateUN />
        <SaltFeed />
        <SavedList />
        </>
    )
}

export default Dashboard; 