import { useState } from 'react'
import Image1 from '/src/assets/1.png'
import Image01 from '/src/assets/01.png'
import Image2 from '/src/assets/2.png'
import Image3 from '/src/assets/3.png'
import Image4 from '/src/assets/4.png'
import Image5 from '/src/assets/5.png'
import Image6 from '/src/assets/6.png'
import Image7 from '/src/assets/7.png'
import Image8 from '/src/assets/8.png'
import Image9 from '/src/assets/9.png'
import Image10 from '/src/assets/10.png'
import Image11 from '/src/assets/11.png'
import Image12 from '/src/assets/12.png'
import Image13 from '/src/assets/13.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <img src={Image1}/>
        <img src={Image1}/>
        <img src={Image01}/>
        <img src={Image2}/>
        <img src={Image3}/>
        <img src={Image4}/>
        <img src={Image5}/>
        <img src={Image6}/>
        <img src={Image7}/>
        <img src={Image8}/>
        <img src={Image9}/>
        <img src={Image10}/>
        <img src={Image11}/>
        <img src={Image12}/>
        <img src={Image13}/>
    </div>
  )
}

export default App
