import React, {useEffect, useState} from 'react';
import './App.css';
import {Link} from  'react-router-dom';


function ShowInterview(match) {

  useEffect(() => {
  	fetchItem();
    // console.log(match);
  },[]);

  const [item,setItem] = useState([]);

  const fetchItem = async() => {
    const fetchItem = await fetch("http://localhost:3001/api/v1/interviews/" + match.match.params.id );
    const item = await fetchItem.json();
    setItem(item["data"]);
  }
  return (
    <div>
      <h1><u>Topic: </u></h1> <h1>{item.topic}</h1>
      <h2><u>Start time: </u></h2> <h2>{item.schedule_at}</h2>
      <h2><u>End time: </u></h2> <h2>{item.end_time}</h2>
      <h2><u>Role: </u></h2> <h2>{item.role}</h2>
      <h2><u>Meeting Link: </u></h2> <h2>{item.meet_link}</h2>
      <h2><u>Interviewer: </u></h2> <h2>{item.user_name}</h2>

      <Link to={`/interviews/edit/${item.id}`}><button>Edit</button></Link>
      <Link to={`/interviews/delete/${item.id}`}><button>Delete</button></Link>
    </div>
  );
}

export default ShowInterview;

