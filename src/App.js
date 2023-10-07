import './App.css';
import { Route, Routes } from "react-router-dom";
import Login from './Component/Home/Login';
import Register from './Component/Home/Register';
import Navbar from './Component/Navbar';
import AdminNavbar from './Component/Navigation/AdminNavbar';
import Create from './Component/Admin/CreateTask/Create';
import Adminsidebar from './Component/Navigation/Adminsidebar';
import Dashboard from './Component/Admin/Dashboard/Dashboard';
import Nav from './Component/Navigation/Nav';
import Createproject from './Component/Admin/Createproject/Createproject';
import Team from './Component/Admin/TeamDetails/Team';
import Live from './Component/Admin/Liveprojects/Live';
import View from './Component/Admin/ViewProject/View';
import ViewTask from './Component/Admin/ViewTask/ViewTask';

function App() {
  return<>
    <Routes>
  
        {/* <Route path="/" element={<Login/>}></Route>  */}
       <Route path="/admin" element={<Dashboard/>}> </Route> 
         <Route path="/create" element={<Create/>}/>
        <Route path="/create-project" element={<Createproject/>}></Route>
        <Route path="/admin-dashboard" element={<Dashboard/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/team" element={<Team/>}></Route>
        <Route path="/live" element={<Live/>}></Route>
        <Route path="/view" element={<View/>}></Route>
        <Route path="/viewtask" element={<ViewTask/>}></Route>
       
        {/* <Route path="/dashboard" element={<Navbar/>}></Route> */}
       
       
       </Routes>

  
 
  </>
}

export default App;
