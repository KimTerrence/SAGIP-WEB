import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

//Pages
import LandingPage from './pages/LandingPage';
import HomePage from  './pages/HomePage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
          <Route path='/' element={<LandingPage/>} /> 
          <Route path='/Home' element={<HomePage/>} /> 
      </Routes>
    </Router>
  )
}

export default App
