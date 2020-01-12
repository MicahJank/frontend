import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from './Card';
import axios from "axios";

import { PlaceHolderThree } from './PlaceHolder.js';

import AliceCarousel from 'react-alice-carousel';


const Container = styled.div`
    margin: 70px;

`;

export default function SaltFeed() {
  const [feed, setFeed] = useState([]);
useEffect(() => {
  
axios
   .get('https://unit3-build-dummy-api.herokuapp.com/feed')
   .then((response) => {
    const sliced = response.data.slice(0,100) // grabs only the first 10 results from the response
    return sliced;
   })
   .then(slicedArray => {
     setFeed(slicedArray.map(comment => {
       return <Card key={comment.id} name={comment.author} toxicity={comment.tox} comment={comment.text} />
     }))
   })
   .catch(error => {
     console.error('Server Error', error);
   });
}, []);

const itemBreakPoints = {
  0: {
    items: 1,
  },
  1024: {
    items: 2,
  },
  1500: {
    items: 3
  }
}

const stagePadding = {
  paddingLeft: 50,
  paddingRight: 50
}

  if(!feed.length) {
    return (
      <Container>
        <PlaceHolderThree className='placeholder' />
      </Container>
    )
  } else {
    return (
        <div className='carousel-container'>
          <AliceCarousel
            items={feed}
            dotsDisabled={true}
            duration={700}
            responsive={itemBreakPoints}
            buttonsDisabled={false}
            slideToIndex={1}
            stagePadding={stagePadding}
          />
        </div>
    );
  }
}