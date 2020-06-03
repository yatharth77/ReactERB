import React, {useEffect, useState} from 'react';
import './App.css';
import {Link} from  'react-router-dom';



function UpdateInterview(event, id){
      const perform_function = async(json_object) => {
      console.log(json_object);
      const options = 
        {
            method: 'PUT',
            body: JSON.stringify(json_object),
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const response = await fetch(`http://localhost:3001/api/v1/interviews/` + id, options);
        console.log(response);
        window.location = "/interviews";
    }


    console.log("I am in UpdateInterview ");  
    event.preventDefault();
    const data = new FormData(event.target);
    var json_object   = {}
    data.forEach((value, key) => {json_object[key] = value});

    json_object['schedule_at']=json_object['schedule_at']+':00.000Z';
    json_object['end_time']=json_object['end_time']+':00.000Z';

    perform_function(json_object);
}



function EditInterview(match) {
  useEffect(() => {
    fetchItem();
  },[]);

  const [item,setItem] = useState([]);

  const fetchItem = async() => {
    const fetchItem = await fetch("http://localhost:3001/api/v1/interviews/" + match.match.params.id);
    const item = await fetchItem.json();
    setItem(item["data"]);
    console.log(item["data"]);
  }

  return (
        <div>
            <form onSubmit = {e => UpdateInterview(e,  match.match.params.id)} className="section">
                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <label htmlFor="title">User Name:</label>
                            <input className="input" name="user_name" type="text" defaultValue = {item.user_name}/>
                        </p>
                    </div>
                    <div className="field">
                        <p  className="control has-icons-left has-icons-right">
                            <label htmlFor="user_id">User Id:</label>
                            <input className="input" name="user_id" type="number" defaultValue = {item.user_id} />
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <label htmlFor="title">Title:</label>
                            <input className="input" name="topic" type="text" defaultValue = {item.topic}/>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left has-icons-right" >
                            <label htmlFor="title">Role:</label>
                            <input className="input" name="role" type="text" defaultValue = {item.role}/>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <label htmlFor="title">Start Time:</label>

                            <input className="input" name="schedule_at" type="datetime-local" defaultValue = {item.schedule_at} />
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <label htmlFor="title">End Time:</label>
                            <input className="input" name="end_time" type="datetime-local" defaultValue = {item.end_time}/>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <label htmlFor="title">Meeting Link:</label>
                            <input className="input" name="meet_link" type="text" defaultValue = {item.meet_link}/>
                        </p>
                    </div>

                    <div className="field">
                        <p className="control">
                            <input className="input" type="submit" />
                        </p>
                    </div>
            </form>
        </div>
  );


}

export default EditInterview;

