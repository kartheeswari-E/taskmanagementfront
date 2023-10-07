import React from 'react'
import '../Sidebar.css'
import { Link, useNavigate } from 'react-router-dom'
function Adminsidebar() {
  const navigate=useNavigate();
  return <>
    <aside id="sidebar" className="sidebar">
  <ul className="sidebar-nav" id="sidebar-nav">
    <li className="nav-item">
      <Link className="nav-link " to="/admin">
        <i className="bi bi-grid" />
        <span>Dashboard</span>
      </Link>
    </li> 

    <li class="nav-item">
        <Link class="nav-link collapsed" to="/create-project">
          <i class="bi bi-journal-text"></i><span>Create Project</span>
        </Link>
    
      </li>
    

      <li class="nav-item">
        <Link class="nav-link collapsed" to="/team">
          <i class="bi bi-person"></i>
          <span>Team Details</span>
        </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link collapsed" to="/live">
          <i class="bi bi-card-list"></i>
          <span>Live Projects</span>
        </Link>
      </li>

      <li className="nav-item">
      <Link
        className="nav-link collapsed"
        to="/completed"
      >
        <i className="bi bi-menu-button-wide" />
        <span>Completed Projects</span>
      </Link>
      </li>
    
    </ul>
</aside>
  </>
}

export default Adminsidebar