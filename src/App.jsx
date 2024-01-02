import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LearnRef from './components/LearnRef'
import LearnUseMemo from './components/LearnUseMemo'
import LearnCB from './components/LearnCB'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>Hooks</h3>
      {/* <LearnRef/> */}
      {/* <LearnUseMemo/> */}
      <LearnCB/>
    </>
  )
}

export default App
