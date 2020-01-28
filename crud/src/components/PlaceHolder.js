import React from 'react';

import styled from 'styled-components';

import { Grid, Placeholder, Segment } from 'semantic-ui-react';


const Container = styled.div`
height: 100vh;

.card-grid {
    height: 100vh;
    display: flex;
    justify-content: space-around;
}

.ui.raised.segment {
    margin-top: 60px;
    height: 50%;
}

`;

export const PlaceHolderThree = () => {

    return (
    <Container>
        <Grid className='card-grid' columns={3} stackable>
            <Grid.Column width='3'>
            <Segment raised>
                <Placeholder className='salt-card-placeholder'>
                <Placeholder.Header image>
                    <Placeholder.Line />
                    <Placeholder.Line />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                    <Placeholder.Line length='large' />
                    <Placeholder.Line length='medium' />
                    <Placeholder.Line length='short' />
                    <Placeholder.Line length='large' />
                    <Placeholder.Line length='medium' />
                    <Placeholder.Line length='short' />
                    <Placeholder.Line length='large' />
                    <Placeholder.Line length='medium' />
                    <Placeholder.Line length='short' />
                    <Placeholder.Line length='large' />
                    <Placeholder.Line length='medium' />
                    <Placeholder.Line length='short' />
                    <Placeholder.Line length='large' />
                    <Placeholder.Line length='medium' />
                    <Placeholder.Line length='short' />
                </Placeholder.Paragraph>
                </Placeholder>
            </Segment>
            </Grid.Column>

            <Grid.Column width='3'>
            <Segment raised>
                <Placeholder className='salt-card-placeholder'>
                <Placeholder.Header image>
                    <Placeholder.Line />
                    <Placeholder.Line />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                <Placeholder.Line length='large' />
                    <Placeholder.Line length='medium' />
                    <Placeholder.Line length='short' />
                    <Placeholder.Line length='large' />
                    <Placeholder.Line length='medium' />
                    <Placeholder.Line length='short' />
                    <Placeholder.Line length='large' />
                    <Placeholder.Line length='medium' />
                    <Placeholder.Line length='short' />
                    <Placeholder.Line length='large' />
                    <Placeholder.Line length='medium' />
                    <Placeholder.Line length='short' />
                    <Placeholder.Line length='large' />
                    <Placeholder.Line length='medium' />
                    <Placeholder.Line length='short' />
                </Placeholder.Paragraph>
                </Placeholder>
            </Segment>
            </Grid.Column>

            <Grid.Column width='3'>
            <Segment raised>
                <Placeholder className='salt-card-placeholder'>
                <Placeholder.Header image>
                    <Placeholder.Line />
                    <Placeholder.Line />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                <Placeholder.Line length='large' />
                    <Placeholder.Line length='medium' />
                    <Placeholder.Line length='short' />
                    <Placeholder.Line length='large' />
                    <Placeholder.Line length='medium' />
                    <Placeholder.Line length='short' />
                    <Placeholder.Line length='large' />
                    <Placeholder.Line length='medium' />
                    <Placeholder.Line length='short' />
                    <Placeholder.Line length='large' />
                    <Placeholder.Line length='medium' />
                    <Placeholder.Line length='short' />
                    <Placeholder.Line length='large' />
                    <Placeholder.Line length='medium' />
                    <Placeholder.Line length='short' />
                </Placeholder.Paragraph>
                </Placeholder>
            </Segment>
            </Grid.Column>
        </Grid>
    </Container>
    )
}