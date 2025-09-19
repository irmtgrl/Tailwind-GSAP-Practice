import './App.css'
import { gsap } from "gsap";
import { useState } from "react"

function App() {
  const [position, setPosition] = useState("left")

  function moveBox() {
    if(position === "left") {
      {gsap.to(".box", { x: 200 })}
      setPosition("right")
    } else {
      {gsap.to(".box", { x: -200 })}
      setPosition("left")
    }

  }

  return (
        <main className='w-full h-full flex flex-col items-center justify-center gap-4'>
          <h1 className='text-purple text-xl underline'>Hey! I am learning fastt.</h1>
          <div className='box bg-purple w-20 h-20'></div>
          <button onClick={moveBox} className='border border-purple rounded-md bg-black text-purple py-2 px-4'> Click Me! </button>
        </main>
  )
}

export default App
