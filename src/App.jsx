import React from 'react'
import Mainroutes from './routes/Mainroutes'
import Navbar from './componentes/Navbar'


const App = () => {
  return (
    <div className='min-h-screen py-8 px-4 md:px-[10%] text-white bg-gray-800'>
      <Navbar />
      <main className="mt-8">
        <Mainroutes />
      </main>
    </div>
  )
}

export default App