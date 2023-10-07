import React from 'react'
import Nav from '../../Navigation/Nav'

function View() {
  return <>
  <Nav/>
  <main id="main" className="main">
  <div className="pagetitle">
    <h1>Task Details</h1>
    <nav>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="index.html">Home</a>
        </li>
        <li className="breadcrumb-item active">View Task</li>
      </ol>
    </nav>
  </div>
  <div class="card">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">assigned to</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">deadline</a>
    <a href="#" class="card-link">Priority</a>
    <a href="#" class="card-link">status</a>
  </div>
</div>
</main>
  </>
}

export default View