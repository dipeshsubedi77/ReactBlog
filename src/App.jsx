import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import './App.css'
import Register from './Register'
import Home from './Home'
import Login from './Login'
import Addblog from './AddBlog'

function App() {
  

  return (
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<Home/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element= {<Login/>}/>
    <Route path='/addblog' element={<Addblog/>}/>
   </Routes>
   
   </BrowserRouter>
  )
}

export default App
