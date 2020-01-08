import React, { useContext } from 'react';

import { Button, Card, Image } from 'semantic-ui-react';

const Comment = props => {

    if(props.author.name) {
        return (
            <Card>
                <Card.Content>
                    <Image
                        size='tiny'
                        floated='right'
                        src='https://www.freeiconspng.com/uploads/troll-face-png-4.png'
                        />
                    <Card.Header>{props.author.name.toUpperCase()}</Card.Header>
                    <Card.Description>
                        {props.comment.text}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button color='green'>
                            {props.author.rank}
                        </Button>
                        <Button color='red'>
                            {props.author.avg_toxicity}
                        </Button>
                    </div>
                </Card.Content>
            </Card>
        )
    } else {
        return <div> Nothing </div>
    }
    
   
}

export default Comment;