import React from 'react';

import SearchForm from './SearchForm.js';
import UserCard from './searched-user/UserCard.js';
import UserComments from './searched-user/UserComments.js';

import { SearchContextProvider } from '../contexts/SearchContext.js';

import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const UserSearch = () => {

    return (
        <SearchContextProvider>
            <Container>
                <SearchForm />
                <UserCard />
                <UserComments />
            </Container>
        </SearchContextProvider>
    )
}

export default UserSearch;