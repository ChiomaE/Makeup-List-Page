import { useState } from 'react'
import './App.css'
import Card from './components/Card/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* Filtering component woulld go here */}
      <nav>
        <h1>Maybelline: Face, Eye, and Lip</h1>
      </nav>
      
      <div className='card-div'>
      <Card />
      </div>
      
    </div>
  )
}

export default App
