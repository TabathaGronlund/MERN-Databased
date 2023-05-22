import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UpdateAuthor from './components/UpdateAuthor';
import DisplayAll from './components/DisplayAll'
import CreateAuthor from './components/CreateAuthor';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<DisplayAll/>}/>
          <Route path="/author/edit/:id" element={<UpdateAuthor/>} />
          <Route path="/author" element={<CreateAuthor/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
