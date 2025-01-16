import React from 'react'
import '../Components/Spinner.css'

function Spinner() {
  return (
    <div className='w-screen h-[calc(100vh-80px)] flex justify-center items-center'>
    <div className='spinner'></div>
  </div>
  )
}

export default Spinner