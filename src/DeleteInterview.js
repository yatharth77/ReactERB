import React, {useEffect, useState} from 'react';
import './App.css';
import {Link} from  'react-router-dom';


function DeleteInterview(match) {
  useEffect(() => {
    console.log(match);
  	fetchItem();
  },[]);


  const fetchItem = async() => {
    const options = 
    {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const fetchItem = await fetch("http://localhost:3001/api/v1/interviews/" + match.match.params.id , options);
    const item = await fetchItem.json();
    console.log(item);
    window.location = "/interviews";
  }
  return (
    <div>
    </div>
  );
}

export default DeleteInterview;

