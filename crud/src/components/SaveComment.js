import React from 'react';
import axiosWithAuth from './utils/axiosWithAuth';

function SaveComment () {

    let state = {
        troll_username: 'daniel',
        comment_toxity: '100',
        comment: 'this is a comment'
    }

  
    function onSubmit (event) {
        event.preventDefault()
        console.log(this.state)

        axiosWithAuth
            .post(`https://hacker-news-troll.herokuapp.com/api/comments`, state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

            return (
                <>
                <button onClick={() => onSubmit()}>Add To Saved List</button>
                </>


                )
        }
  

export default SaveComment; 

