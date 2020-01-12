import React, {useState} from 'react';
import styled from 'styled-components';
import SaltFeed from './SaltFeed.js';

import { Message } from 'semantic-ui-react';

const Wrapper = styled.div`

`

// dashboard component is what should display things like the cards containing the DS api data
const Dashboard = () => {
    const [currentUser, setCurrentUser] = useState(localStorage.getItem('username'));

    return (
        <>
        <Wrapper>
                <Message
                    color='orange'
                    header={`Welcome to your Salty Comment Dashboard, ${currentUser}!`}
                />
        </Wrapper>   
        <SaltFeed />
        </>
    )
}


export default Dashboard;
