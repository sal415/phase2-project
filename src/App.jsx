import { useState, useEffect } from 'react'
import './App.css'
import LandingPage from "./LandingPage"
import Cart from "./Cart"
import Navbar from "./Navbar"

function App() {
  const [sneakers, setSneakers] = useState([])
  const [cart, setCart] = useState([])


  let Component
  switch(window.location.pathname) {
    case "/":
      Component = App
      break
      case "/Prices":
        Component = Prices
        break
      case "/Description":
        Component = Description
        break
  }



useEffect (() => {
  const request = async () => {
    let req = await fetch('http://localhost:3000/sneakers')
    let res = await req.json()
    setSneakers(res)
  }
  request()
},[])

  const addSneaker = (shoe)=>{
    if(cart.filter(shoe))return;
    setCart([...cart,shoe])
  }

  return (
    <>
    <Navbar/>
    <LandingPage addSneaker={addSneaker}/>
    <Cart />
    <h2>Sneakers</h2>
    {
      sneakers.map((s) => (
        <div key={s.id} className="App">
          <h2>{s.name}</h2>
          <img src={s.imgSrc}/> 
          {/* <p>{s.Description}</p>
          <h2>{s.ReleaseYear}</h2>
          <h1>{s.Price}</h1> */}
        </div>
      ))
    }

    </>
  )
}

export default App
