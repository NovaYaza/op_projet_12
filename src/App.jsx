import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProfilePage from './pages/ProfilePage'
import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
