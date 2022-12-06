import { useState, useEffect } from 'react'
import './App.css'
import LandingPage from "./LandingPage"

function App() {
  const [sneakers, setSneakers] = useState([])

  


useEffect (() => {
  const request = async () => {
    let req = await fetch('http://localhost:3000/sneakers')
    let res = await req.json()
    setSneakers(res)
  }
  request()
},[])
  return (
    <>
    <LandingPage />
    <h2>Sneakers</h2>
    {
      sneakers.map((s) => (
        <div key={s.id} className="App">
          <h2>{s.name}</h2>
          <img src={s.imgSrc} />
        </div>
      ))
    }

    </>
  )
}

export default App
