import React, { useState } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AllData from './AllData'
import Show from './Show'
import './App.css';

function App() {
  let [person, setPerson] = useState({});

  let sampleData = [
    {
      name: "Nick",
      age: 100,
      location: "Seattle"
    },
    {
      name: "Yoshi",
      age: 300,
      location: "NYC"
    }
  ]

  const handlePerson = (newPerson) => {
    setPerson(newPerson);
  }
  
  return (
    <div className="App">
      <Router>
        
        <Route exact path="/">
          <AllData people={sampleData} setNewPerson={handlePerson}/>
        </Route>
        
        <Route exact path="/show">
          <Show person={person}/>
        </Route>

      </Router>
    </div>
  );
}

export default App;
