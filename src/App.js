import React from 'react';
import './App.css';
import Nav from './Nav'
import About from './About'
import Home from './Home'
import Interviews from './Interviews'
import ShowInterview from './ShowInterview'
import DeleteInterview from './DeleteInterview'
import NewInterview from './CreateInterview'
import EditInterview from './EditInterview'
// import CreateInterview from './CreateInterview'

// import CreateInterview from './CreateInterview'


import {BrowserRouter as Router, Switch, Route } from  'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/interviews" exact component={Interviews} />

          <Route path="/interviews/create" exact component={NewInterview} />

          <Route path="/interviews/:id" exact component={ShowInterview} />
          <Route path="/interviews/delete/:id" exact component={DeleteInterview} />
          <Route path="/interviews/edit/:id" exact component={EditInterview} />

        </Switch> 
      </div>
    </Router>
  );
}

export default App;
