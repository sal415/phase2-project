import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from "./LandingPage"
import MyFavorites from './MyFavorites'
import Trade from './Trade'
import Form from './Form'
import Done from './Done'
import './App.css'

function App() {
  const [sneakers, setSneakers] = useState([])
  const [favorites, setFavorites] = useState([])
  const [view1, setView1] = useState([])

  useEffect(() => {
    const request = async () => {
      let req = await fetch('http://localhost:3000/sneakers')
      let res = await req.json()
      setSneakers(res)
    }
    request()
  }, [])

  const favoriteButton = (s) => {
    console.log('hi')
    setFavorites([...favorites, s])
  }
  const outStock = () => {
    console.log('hi')
    alert('sorry')
    prompt('Enter your mdkin Email!')
  }

  const sell = () => {
    console.log('sell')

  }
  const view = (s) => {
    console.log('view')
    setView1([...view1, s])
  }

  const buyNow = () => {
    console.log('buyNow?')
    prompt('Enter your card number:')
  }

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<LandingPage favorites={favorites} sneakers={sneakers} view={view} favoriteButton={favoriteButton} />}></Route>
        <Route exact path='/Trade' element={<Trade sneakers={sneakers} outStock={outStock} sell={sell} view1={view1} buyNow={buyNow} />}></Route>
        <Route exact path="/MyFavorites" element={<MyFavorites favorites={favorites} />}></Route>
        <Route exact path='/Form' element={<Form />}></Route>
        <Route exact path='/Done' element={<Done />}></Route>
      </Routes>
    </Router>
  )
}
export default App