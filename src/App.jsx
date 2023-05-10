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

import Wave1 from'/src/assets/SiteWave/1.png'
import Wave2 from'/src/assets/SiteWave/2.png'
import Wave3 from'/src/assets/SiteWave/3.png'
import Wave4 from'/src/assets/SiteWave/4.png'
import Wave5 from'/src/assets/SiteWave/5.png'
import Wave6 from'/src/assets/SiteWave/6.png'
import Wave7 from'/src/assets/SiteWave/7.png'
import Wave8 from'/src/assets/SiteWave/8.png'


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
        <img src={Wave1}/>
        <img src={Wave2}/>
        <img src={Wave3}/>
        <img src={Wave4}/>
        <img src={Wave5}/>
        <img src={Wave6}/>
        <img src={Wave7}/>
        <img src={Wave8}/>


    </div>
  )
}

export default App
