import React from 'react';

import SaltFeed from './SaltFeed.js';
// import SearchForm from './SearchForm.js';
import UpdateUsername from './UpdateUsername.js';

// dashboard component is what should display things like the cards containing the DS api data
const Dashboard = () => {

    return (
        <>
        <div className = "update-section">
                <UpdateUsername /> 
        </div>
        <div className = "dashboard-header">
                <h1>Welcome to your Salty Comment Dashboard, USERNAME-HERE.</h1>
            </div>
        <SaltFeed />
        </>
    )
}


export default Dashboard;
