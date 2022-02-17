import './App.css';
import React, { useState } from 'react';

// Hit space as soon as the color changes to red
function App() {
  // data for the application
  const [begin, setFlag] = useState(false);
  const [color, setColor] = useState("red");
  const [randomNumber, setRandomNumber] = useState(Math.random() * 5);
  const [start, setStart] = useState();

  const beginTest = () => {
    setFlag(true);
    setTimeout(() => {
      setColor("green")
      setStart(new Date());
      setRandomNumber(Math.random() * 5);
    }, randomNumber*1000)
  }

  const endTest = () => {
    // calculate the time when user clicks the end button
    if(color === "red") {
      alert("You have to start the test first!");
    } else {
      alert("Congratulations! You clicked the button in " + Math.abs(start - new Date()) + " ms")
    }
  }

  const renderButton = () => {
    if(!begin) {
      return <button onClick={() => beginTest()}>Begin The Test</button>
    } else {
      return (color === "red" ? <div class="color red" onClick={endTest}>Red</div> : <div class="color green" onClick={endTest}>Green</div>)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Reaction Time Test</h2>
        <h5>Click ASAP when the Color changes to Green</h5>
        {renderButton()}
      </header>
    </div>
  );
}

export default App;
