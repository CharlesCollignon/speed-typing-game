import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const STARTING_TIME = 5

  const [text, setText] = useState("")
  const [timer, setTimer] = useState(STARTING_TIME)
  const [game, setGame] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  const [disable, setDisable] = useState(false)

  function handleChange(e) {
    const {value} = e.target
    setText(value)
  }

  function handleCount(text) {
    const wordArr = text.trim().split(" ")
    const filterWord = wordArr.filter(word => word !== "")
    return filterWord.length
  }

  function startGame() {
    setDisable(true)
    setGame(true)
    setTimer(STARTING_TIME)
    setText("")
    setWordCount(0)
  }

  function endGame() {
    setGame(false)
    const numWords = handleCount(text)
    setWordCount(numWords)
    setDisable(false)
  }

    useEffect(() => {
      if (game && timer > 0) {
        setTimeout(() => {
          setTimer(time => time - 1)
        }, 1000);
      } else if (timer === 0) {
        endGame()
      }
    }, [timer, game])
    

  return (
    <div className="App">
      <h1>Speed typing game</h1>
      <textarea 
        name="textarea" 
        id="textarea" 
        value={text}
        placeholder="Type here..."
        onChange={handleChange}
        disabled={!disable}
      />
      <h4>Time remaining :{timer}s</h4>
      <button disabled={disable} onClick={startGame}>Start</button>
      <h1>Word count : {wordCount}</h1>
    </div>
  );
}

export default App;
