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
          <h1 className='text-xl underline'>Learning GSAP & Tailwind</h1>
          <p className='text-wrap w-1/2 text-center mb-10'>Learned how to use custom components and layers. Now it's time to add some spice with diving deep into the animations.</p>
          <div className='box bg-sea w-20 h-20 mb-10'></div>
          <button onClick={moveBox} className='rounded-md bg-black py-2 px-4 opacity-60 hover:opacity-100 hover:outline-2 hover:outline-candy hover:outline-double'> Click Me! </button>
        </main>
  )
}

export default App
