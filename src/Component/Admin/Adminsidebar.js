import React from 'react'
import '../Sidebar.css'
import { Link } from 'react-router-dom'
function Adminsidebar() {
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
        <Link class="nav-link collapsed"  to="/create-task">
          <i class="bi bi-journal-text"></i><span>Forms</span>
        </Link>
    
      </li>
    <li class="nav-heading">Pages</li>

      <li class="nav-item">
        <Link class="nav-link collapsed" to="/user-details">
          <i class="bi bi-person"></i>
          <span>Profile</span>
        </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link collapsed" to="/register">
          <i class="bi bi-card-list"></i>
          <span>Register</span>
        </Link>
      </li>
    
    </ul>
</aside>
  </>
}

export default Adminsidebar