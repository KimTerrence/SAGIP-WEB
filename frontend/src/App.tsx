import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Pages 
import LandingPage from './pages/LandingPage';
import HomePage from  './pages/HomePage';

function App() {

  return (
    <>
      <Router>
        <Routes>
            <Route path='/' element={<LandingPage/>} /> 
            <Route path='/Home' element={<HomePage/>} /> 
        </Routes>
      </Router>
    </>
  )
}

export default App
