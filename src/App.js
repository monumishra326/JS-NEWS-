import React from 'react'
import { Home } from './Components/Home'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import { Topstories } from './Components/Topstories';
import { Beststories } from './Components/Beststories';
import { Newstories } from './Components/Newstories';

const App = () => {
  return (
    <div className='App'>
      <Home/>
      <Routes>
      <Route path='/' element={<Topstories/>}/>
      <Route path='/best' element={<Beststories/>}/>
      <Route path='/new' element={<Newstories/>}/>
      </Routes>
    </div>
   
  )
}
export default App
