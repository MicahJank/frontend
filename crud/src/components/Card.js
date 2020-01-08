import React from "react";
import styled from "styled-components";
// import SearchForm from './SearchForm';

/*
const WrapperDiv= styled.div`
padding: 20px;
border-radius: 20px;
width: 500px;
height: 50%;
border: 2px solid black;
margin: 20px 0 20px 0;
box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`

*/
const ButtonBox = styled.div`
display: flex;
justify-content: space-evenly;
`


const Card = (props) => {
  // some comments are too big for the card, they need to be sliced so that 
  // the card doesnt look weird, ideally there would then be some way to 'view more'
  // for the comment on the card
  let comment;
  if(props.comment.length > 350) {
    comment = `${props.comment.slice(0, 351)}...`
  } else {
    comment = props.comment;
  }

  // TODO: Save button should save the comment to the backend api (look at backend README for endpoint routes)
  return (
          <div className='carousel-card'>
            <h2>{props.name}</h2>
            <p>{comment}</p>
            <p>Toxicity Score: {props.toxicity}</p>
            <ButtonBox>
            <button>Save Comment</button>
            <button>Share Comment</button>
            <button>Like</button>
            <button>Dislike</button>
            </ButtonBox>
            
          </div>
        );
       }

export default Card;
