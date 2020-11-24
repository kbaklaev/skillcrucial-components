import React, { useState } from 'react';
import './App.css';
import Input from './components/inputs/input-1/input';

function App() {
  const [inputValue, setInputeValue] = useState('')

  return (
    <div className="App">
      <Input title='Username' getValue={(str) => setInputeValue(str)} />
      {inputValue}
    </div>
  );
}

export default App;
