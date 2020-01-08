import React, { useContext } from 'react';
import { SearchContext } from '../../contexts/SearchContext.js';

import { Button, Card, Image } from 'semantic-ui-react';


const UserCard = () => {
    const { author } = useContext(SearchContext);
    if(author.name) {
        return (
            <Card>
                <Card.Content>
                    <Image
                        size='tiny'
                        floated='right'
                        src='https://www.freeiconspng.com/uploads/troll-face-png-4.png'
                        />
                    <Card.Header>{author.name.toUpperCase()}</Card.Header>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button color='green'>
                            {author.rank}
                        </Button>
                        <Button color='red'>
                            {author.avg_toxicity}
                        </Button>
                    </div>
                </Card.Content>
            </Card>
        )
    } else {
        return (
            <div>No user...</div>
        )
    }
    
}

export default UserCard;