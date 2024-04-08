import { useState } from 'react'
import './App.css'
import Card from './components/Card/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Maybelline Product Page</h1>
      <div className='card-div'>
      <Card />
   
      </div>
      
    </div>
  )
}

export default App
