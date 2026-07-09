import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddBook from './components/AddBook'
import SearchBook from './components/SearchBook'
import DeleteBook from './components/DeleteBook'
import BookView from './components/BookView'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddBook/>} />
        <Route path='/Search' element={<SearchBook/>} />
        <Route path='/Delete' element={<DeleteBook/>} />
        <Route path='/View' element={<BookView/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
