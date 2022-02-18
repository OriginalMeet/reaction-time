import './App.css';
import { useState } from 'react';

function App() {
  const [begin, setFlag] = useState(false);
  const [color, setColor] = useState("red");
  const [randomNumber, setRandomNumber] = useState(Math.random() * 10);
  const [start, setStart] = useState();
  const [text, setText] = useState(<h>Begin the Test.<br></br><br></br> Click ASAP the Screen Color Changes to Green.</h>);

  const beginTest = () => {
    setFlag(true);
    setText("Ready...");
    setTimeout(() => {
      setColor("green")
      setStart(new Date());
      setRandomNumber(Math.random() * 10);
      setText("Click!");
    }, randomNumber*1000)
  }

  const endTest = () => {
    if(color === "red") {
      setText(<h>Clicked too early, wait for the green color.</h>);
    } else {
      setText(<h>You clicked the button in {Math.abs(start - new Date())} ms!<br></br><br></br> Refresh the Page to Start Again.</h>)
    }
  }

  const renderButton = () => {
    if(!begin) {
      return <div className="color purple" onClick={() => beginTest()}>{text}</div>
    } else {
      return (color === "red" ? <div className="color red" onClick={endTest}>{text}</div> : <div className="color green" onClick={endTest}>{text}</div>)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="inline">
          <span>Reaction Time Test</span>
        </div>
        {renderButton()}
      </header>
    </div>
  );
}

export default App;
