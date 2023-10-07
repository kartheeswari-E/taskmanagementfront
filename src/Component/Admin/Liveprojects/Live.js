import React from 'react'
import Nav from '../../Navigation/Nav'
import { useNavigate } from 'react-router-dom'
function Live() {
    const navigate=useNavigate();
  return <>
  <Nav/>
  <main id="main" className="main">
  <div className="pagetitle">
    <h1>Total Projects</h1>
    <nav>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="index.html">Home</a>
        </li>
        <li className="breadcrumb-item active">Live Projects</li>
      </ol>
    </nav>
  </div>

  <section className="section">
  <div className="row">

    <div className="col-lg-10 ">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Project Details</h5>
          {/* Table with stripped rows */}
          <table className="table table-striped">
            <thead>
              <tr>
               
                <th scope="col">Project Tittle</th>
                <th scope="col">View</th>
                 <th scope="col">Remove</th>
              </tr>
            </thead>
            <tbody>
              <tr>
              
                <td>Designer ddddddddddddddddd ddddddddddddd</td>
                <td><button type="button" onClick={()=>navigate("/view")} class="btn btn-success">View</button></td>
                <td><button type="button" class="btn btn-danger">Delete</button></td>
              </tr>
              <tr>
              
              <td>Designer </td>
              <td><button type="button"  class="btn btn-success">View</button></td>
              <td><button type="button" class="btn btn-danger">Delete</button></td>
            </tr>
            <tr>
              
              <td>Designer </td>
              <td><button type="button" class="btn btn-success">View</button></td>
              <td><button type="button" class="btn btn-danger">Delete</button></td>
            </tr>
            <tr>
              
              <td>Designer </td>
              <td><button type="button" class="btn btn-success">View</button></td>
              <td><button type="button" class="btn btn-danger">Delete</button></td>
            </tr>
            <tr>
              
              <td>Designer </td>
              <td><button type="button" class="btn btn-success">View</button></td>
              <td><button type="button" class="btn btn-danger">Delete</button></td>
            </tr>
              
            </tbody>
          </table>
          {/* End Table with stripped rows */}
        </div>
      </div>
   
    </div>
  </div>
</section>

 
</main>
  </>
}

export default Live