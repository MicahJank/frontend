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
    setFeed(sliced);


   })
   .catch(error => {
     console.error('Server Error', error);
   });
}, []);

  return (
    <WelcomeWrapper>
      {feed.map(comment => {
         return (
          <Card  
           key={comment.id} 
           name={comment.author}
           toxicity={comment.tox} 
           comment={comment.text} />
           )
      }
          
    )}
    </WelcomeWrapper>
  );
}