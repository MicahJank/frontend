import React, { useState, useEffect } from 'react';

import axiosWithAuth from '../utils/axiosWithAuth.js'

// TODO: SavedList need to GET and then display the saved list from the backend API (look at backend readme for details)
const SavedList = () => {
  const [savedComments, setSavedComments] = useState([]);

  useEffect(() => {
    // GET the saved list here
  }, [])

return (
  // Data from savedComments would need to be mapped over and displayed somehow in this return
  <div className="saved-list">
    <h3>Saved Comments:</h3>
  </div>
);

}

export default SavedList;