
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
// import Counter from './Counter/Counter'
import Home from './pages/Home'
import Cart from './pages/Cart'


function App() {

  return (
    <div>
      <div className='bg-slate-900 '>   {/* <Counter/> */}
        <Navbar />
      </div>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App
