import { useState } from 'react'
import Image1 from '/src/assets/1.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <img src={Image1}/>
    </div>
  )
}

export default App
