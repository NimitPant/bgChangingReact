import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive');
  const changeColor=(color)=>{
      setColor(color);
  }
  

  return (
    <>
      <div className='w-full h-screen duration-200 ' style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 rounded-3xl'>
            <button onClick={()=>setColor('blue')} style={{color: 'blue'}}>BLUE</button>
            <button onClick={()=>changeColor('red')} style={{color: 'red'}}>RED</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
