import './App.css';
import React, { useState } from 'react';

function App() {
  const [text, setText] = useState("")

  function handleChange(e) {
    const {value} = e.target
    setText(value)
  }

  function handleCount(text) {
    const wordArr = text.trim().split(" ")
    console.log(wordArr.length)
    return wordArr.length
  }

  return (
    <div className="App">
    <h1>Speed typing game</h1>
    <textarea 
      name="textarea" 
      id="textarea" 
      value={text}
      placeholder="Type here"
      onChange={handleChange}
    />
    <h4>Time remaining :</h4>
    <button onClick={() => handleCount(text)}>Start</button>
    <h1>Word count :</h1>
  </div>
  );
}

export default App;
