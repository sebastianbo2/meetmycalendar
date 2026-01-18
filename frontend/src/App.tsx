import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Onboarding from './pages/onboarding';
import LoginPage from './pages/login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Onboarding/>}/>
          <Route path="/login" element={<LoginPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
