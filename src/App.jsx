import React from 'react'
import AnimatedCursor from "react-animated-cursor"
import { Home } from './Pages/Home'

const App = () => {
  return (
    <div>
       <AnimatedCursor color='0,255,255'/>
      <Home/>
    </div>
  )
}

export default App