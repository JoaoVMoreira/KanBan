import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Colaboradores from './Pages/Colaboradores'
import Home from './Pages/Home'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/colaboradores' element={<Colaboradores/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
