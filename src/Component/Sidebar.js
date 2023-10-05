import React from 'react'
import './Sidebar.css'
function Sidebar() {
  return<>
  <aside id="sidebar" className="sidebar">
  <ul className="sidebar-nav" id="sidebar-nav">
    <li className="nav-item">
      <a className="nav-link " href="index.html">
        <i className="bi bi-grid" />
        <span>Dashboard</span>
      </a>
    </li> </ul>
</aside>

  </>
}

export default Sidebar