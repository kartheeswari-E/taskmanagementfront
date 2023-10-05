import './App.css';
import { Route, Routes } from "react-router-dom";
import Login from './Component/Home/Login';
import Register from './Component/Home/Register';
import Navbar from './Component/Navbar';


function App() {
  return<>
    <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/dashboard" element={<Navbar/>}></Route>
        </Routes>

  
 
  </>
}

export default App;
