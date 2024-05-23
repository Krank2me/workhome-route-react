import { Routes, Route } from 'react-router-dom';
import { Home } from './components/home/Home';
import { Pricing } from './components/pricing/Pricing';
import { About } from './components/about/About';
import { Navigation } from './components/navigation/Navigation';
import './App.css'

function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/pricing' element={<Pricing />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
    </>
  )
}

export default App
