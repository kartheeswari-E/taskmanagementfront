import './App.css';
import { Route, Routes } from "react-router-dom";
import Login from './Component/Home/Login';
import Register from './Component/Home/Register';
import Navbar from './Component/Navbar';
import AdminNavbar from './Component/Admin/AdminNavbar';
import Create from './Component/Admin/CreateTask/Create';


function App() {
  return<>
    <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/admin" element={<AdminNavbar/>}></Route>
        <Route path="/create" element={<Create/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/dashboard" element={<Navbar/>}></Route>
        </Routes>

  
 
  </>
}

export default App;
