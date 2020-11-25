import React, { useState } from 'react'
import './App.css'
import Input from './components/inputs/input-1/input'
import Quiz from './components/macbaren/quiz/containers/Ouiz/Quiz'

function App() {
  const [inputValue, setInputeValue] = useState('')

  return (
    <div className="App">
      <Quiz />
      {/* <Input title="Username" getValue={(str) => setInputeValue(str)} />
      {inputValue} */}
    </div>
  )
}

export default App
