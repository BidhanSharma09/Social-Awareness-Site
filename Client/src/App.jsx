import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Register from './pages/User/Register'
import Login from './pages/User/Login'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      
      <Route path='/' element={<Home/>}  />  
      <Route path = '/register' element={<Register/>}/>
      <Route path = '/login' element={<Login/>}/>
      

    </Routes>
    </BrowserRouter>
  )
}

export default App
