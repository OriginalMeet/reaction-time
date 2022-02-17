import './App.css';
import React, { useState } from 'react';

// Hit space as soon as the color changes to red
function App() {
  // data for the application
  const [begin, setFlag] = useState(false);

  const renderButton = () => {
    if(!begin) {
      return <button onClick={() => setFlag(true)}>Begin The Test</button>
    } else {

    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h>Reaction Time Test</h>
        {renderButton()}
      </header>
    </div>
  );
}

export default App;
