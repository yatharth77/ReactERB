import React, {useEffect, useState} from 'react';
import './App.css';
import {Link} from  'react-router-dom';



function CreateInterview(event){

      const perform_function = async(json_object) => {
      console.log(json_object);
      const options = 
        {
            method: 'POST',
            body: JSON.stringify(json_object),
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const response = await fetch(`http://localhost:3001/api/v1/interviews`, options);
        console.log(response);
        window.location = "/interviews";
    }


    console.log("I am in CreateInterview ");  
    event.preventDefault();
    const data = new FormData(event.target);
    var json_object   = {}
    data.forEach((value, key) => {json_object[key] = value});

    json_object['schedule_at']=json_object['schedule_at']+':00.000Z';
    json_object['end_time']=json_object['end_time']+':00.000Z';

    perform_function(json_object);
}



function NewInterview() {
  useEffect(() => {
    // fetchItem();
  },[]);

  return (
        <div>
            <form onSubmit = {CreateInterview} className="section">
                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <label htmlFor="title">User Name:</label>
                            <input className="input" name="user_name" type="text" />
                        </p>
                    </div>
                    <div className="field">
                        <p  className="control has-icons-left has-icons-right">
                            <label htmlFor="user_id">User Id:</label>
                            <input className="input" name="user_id" type="number" />
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <label htmlFor="title">Title:</label>
                            <input className="input" name="topic" type="text" />
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <label htmlFor="title">Role:</label>
                            <input className="input" name="role" type="text" />
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <label htmlFor="title">Start Time:</label>
                            <input className="input" name="schedule_at" type="datetime-local" />
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <label htmlFor="title">End Time:</label>
                            <input className="input" name="end_time" type="datetime-local" />
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <label htmlFor="title">Meeting Link:</label>
                            <input className="input" name="meet_link" type="text" />
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

export default NewInterview;

