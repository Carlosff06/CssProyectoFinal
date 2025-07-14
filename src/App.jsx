import { useEffect, useState } from 'react'

import Header from './components/Header'
import Day from './components/Day'
import Form from './components/Form'
import ListTasks from './components/ListTasks'
import Week from './components/Week'
import Month from './components/Month'
import Year from './components/Year'
import Carousel from './components/Carousel'


import './App.css'
import TodoList from './components/TodoList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Ascensor from './components/Ascensor'

function App() {
  

  return (
    <BrowserRouter>
    <Carousel />
      <Routes>
        
        <Route path="/dev/todo-list" element={<TodoList />} />
        <Route path="/dev/ascensor" element={<Ascensor />} />
        <Route path="/dev/mauricio" element={<TodoList />} />
        <Route path="/dev/carlos" element={<Ascensor />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
