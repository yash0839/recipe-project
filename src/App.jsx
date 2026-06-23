import React from 'react'
import Mainroutes from './routes/Mainroutes'
import Navbar from './componentes/Navbar'

const App = () => {
  return (
    <div className='w-screen h-screen py-10 px-[10%] text-white font-thin bg-gray-800 '>
      <Navbar />
      <Mainroutes />
    </div>
  )
}

export default App