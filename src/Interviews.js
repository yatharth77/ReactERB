import React, {useEffect, useState} from 'react';
import './App.css';
import {Link} from  'react-router-dom';


function Interviews() {

  useEffect(() => {
  	// when page loads 
  	fetchItems();
  },[]);

  const [items,setItems] = useState([]);

  const fetchItems = async() => {
  	// api calling function on page load
  	const data = await fetch("http://localhost:3001/api/v1/interviews");
  	const response = await data.json(); 
  	// console.log(response["data"]);
  	setItems(response["data"]);
  }
  return (
  	// what to return after api called
    <div>
     	{items.map(item => (
     		<h1 key={item.id}>
          <Link to={`/interviews/${item.id}`}>{item.id} {item.topic}</Link>
        </h1>
     	))}
      <Link to={`/interviews/create`}><button>Create New</button></Link>
    </div>
  );
}

export default Interviews;
