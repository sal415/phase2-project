import { useState, useEffect } from 'react'
import './App.css'
import LandingPage from "./LandingPage"
import MyFavorites  from './MyFavorites'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Trade from './Trade'



function App() {
  const [sneakers, setSneakers] = useState([])
  const [favorites,setFavorites] = useState([])

  
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <MyFavorites />,
  //   },
  //   // {
  //   //   path: "/",
  //   //   element: <
  //   // }
  // ])

  


useEffect (() => {
  const request = async () => {
    let req = await fetch('http://localhost:3000/sneakers')
    let res = await req.json()
    setSneakers(res)
  }
  request()
},[])

const favoriteButton = () => {
  console.log('hi')
  // return (prevstate) => {
  // {prevstate.filter((i)=> {SetFavorites(favorites)})}
  }
  
  
  const outOfStock = () => {
    alert('Sorry, there is currently no stock available.')
    prompt('Enter your email address so we can notify you when the item is available!')
  }
  
  // const sell = () => {
    // console.log('hi')}
    
    return (
      <Router>
          <Routes>
            <Route exact path='/' element={<LandingPage favorites={favorites} sneakers={sneakers} favoriteButton={favoriteButton} />}></Route>
            <Route exact path='/Trade' element={<Trade sneakers={sneakers} outOfStock={outOfStock} />}></Route>
            <Route exact path="/MyFavorites" element={<MyFavorites favorites={favorites}  />}></Route>
          </Routes>
        </Router>






// <BrowserRouter>
// <Trade sneakers={sneakers} />
// <MyFavorites favorites={favorites} favorite={favorite} />
// <h2>Sneakers</h2>
// {
  // sneakers.map((s) => (
    //   <div key={s.id} className="App">
    //     <h2>{s.name}</h2>
    //     <img onClick={() =>{favorite()} } id='shoes' src={s.imgSrc} />
    //     <p>{s.Description}</p>
    
    //     </div>
    //   ))
    // }
    
    // </BrowserRouter>
    )
    
    
  }
export default App
