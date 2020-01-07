import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from './Card';
import axios from "axios";

import AliceCarousel from 'react-alice-carousel';

const WelcomeWrapper = styled.section`
width: 100%;
height: 600px;
display: flex;
align-items: center;
justify-content: center;
box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`;

export default function SaltFeed() {
  const [feed, setFeed] = useState([]);
useEffect(() => {
  
axios
   .get('https://cors-anywhere.herokuapp.com/https://unit3-build-dummy-api.herokuapp.com/feed')
   .then((response) => {
    const sliced = response.data.slice(0,10) // grabs only the first 10 results from the response
    console.log(sliced);
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