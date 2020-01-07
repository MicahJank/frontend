import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import styled from 'styled-components';
import SearchForm from './SearchForm';

const Wrapper = styled.div`
  margin-top: 5%;
  margin: 0 auto;
  
`

function List() {
//   const [feed, setFeed] = useState([]);
//   useEffect(() => {
    
//   axios
//      .get('https://cors-anywhere.herokuapp.com/https://unit3-build-dummy-api.herokuapp.com/feed')
//      .then((response) => {
//       const sliced = response.data.slice(0,10) // grabs only the first 10 results from the response
//       console.log(sliced);
//       setFeed(sliced);


//      })
//      .catch(error => {
//        console.error('Server Error', error);
//      });
//  }, []);

   return (
     <>
     <Wrapper className = "search-design">
        <SearchForm />
      </Wrapper>

      <div className="character-list">
        character list

      {/* {feed.map(comment => {
         return (
          <Card  
           key={comment.id} 
           name={comment.author}
           toxicity={comment.tox} 
           comment={comment.text} />
           )
      }
          
    )} */}
      </div>
     </>

   );
 }

 export default List;