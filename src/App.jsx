import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return<div className='z-0 bg-[url("./bgHarry.png")] min-h-screen w-dvw  inset-0 bg-black bg-cover bg-repeat  	flex flex-col  justify-center items-center '>
    <div className='md:text-[150px] text-[55px]'>
      Xenia is coming soon 
    </div>
    <div>
      <a className='md:text-3xl text-xl outline p-2 rounded-full' href="https://bit.ly/xenia25">click here to register</a>
    </div>

  </div>
}

export default App
