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

  gsap.to(".pbox", {
    duration: 2,
    rotate: -90,
    x: -100,
    repeat: 3,
    yoyo: true
  })

  gsap.to(".twin1", {
    duration: 1,
    x: -100,
    yoyo: true,
    repeat: 1,
  })

  gsap.to(".twin2", {
    duration: 1,
    x: 100,
    delay: 2,
    repeat: 1,
    yoyo: true
  })

    gsap.to(".stg", {
      duration: 1,
      rotation: 360,
      opacity: 1,
      delay: 0.5,
      stagger: 0.1,
      ease: "sine.out",
    })
    document.querySelectorAll(".stg").forEach((box, index) => {
      box.addEventListener("click", () => {
        gsap.to(".stg", {
          duration: 0.5,
          opacity:0,
          y: -100,
          stagger: {
            from: index,
            amount: 1
          },
          ease: "back.in"
        })
      })
    })


  return (
        <main className='w-full h-full flex flex-col items-center justify-center gap-4'>
          <h1 className='text-xl underline'>Learning GSAP & Tailwind</h1>
          <p className='text-wrap w-1/2 text-center mb-10'>Learned how to use custom components and layers. Now it's time to add some spice with diving deep into the animations.</p>
          {/* translate */}
          <div className='box rounded-md bg-sea w-20 h-20 mb-4'></div>
          {/* rotate and yoyo */}
          <div className='pbox rounded-md bg-candy w-20 h-20 mb-4'></div>
          {/* delays */}
          <div className='flex '>
            <div className="twin1 rounded-md bg-sea w-20 h-20"></div>
            <div className="twin2 rounded-md bg-candy w-20 h-20"></div>
          </div>
          <div className='flex gap-4'>
            <div className="stg rounded-md bg-amber-300 w-20 h-20 opacity-0"></div>
            <div className="stg rounded-md bg-sky-300 w-20 h-20 opacity-0"></div>
            <div className="stg rounded-md bg-pink-300 w-20 h-20 opacity-0"></div>
            <div className="stg rounded-md bg-lime-300 w-20 h-20 opacity-0"></div>
          </div>
          <button onClick={moveBox} className='rounded-md bg-black py-2 px-4 opacity-60 hover:opacity-100 hover:outline-2 hover:outline-candy hover:outline-double'> Click Me! </button>
        </main>
  )
}

export default App
