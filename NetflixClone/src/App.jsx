import { useEffect, useState } from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import './App.css'

// Pages
import Home from './Pages/Home/Home'
import Movies from './Pages/Movies/Movies'
import Series from './Pages/Series/Series'

// Components
import { Navbar } from './Components/Navbar'


function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/series' element={<Series />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
