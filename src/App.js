import React from 'react'
import Details from '../ts/src/Details';
import './App.css'

function App() {
  return (
    <div className="App">
      <h1 className="head">My Details</h1>
      <Details
      name="Jake"
      email="gat@gmail.com"
      age = {25}
      friends={['Alex','Ruby','Mat']}
      />

    </div>
     
  )
}

export default App