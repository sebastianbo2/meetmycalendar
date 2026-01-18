import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Onboarding from './pages/onboarding';
import LoginPage from './pages/login';
import CalendarDisplay from './pages/calendarDisplay';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Onboarding/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/calendar" element={<CalendarDisplay/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
