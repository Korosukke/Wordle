import words from "./data/db.json"
import { useState } from 'react';
import Wordle from "./components/Wordle"

function App() {

  const [solution,setsolution] = useState(words[Math.floor(Math.random()*words.length)]);
  return (
    <div className="App">
      <header>
        <h1>Worddle App</h1>
        <Wordle solution={solution}/>
      </header>
      
    </div>
  );
}

export default App;
