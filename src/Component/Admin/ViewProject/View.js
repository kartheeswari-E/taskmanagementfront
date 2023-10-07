import React from 'react'
import Nav from '../../Navigation/Nav'
import { useNavigate } from 'react-router-dom'
function View() {
    const navigate=useNavigate();
  return<>
  <Nav/>
  <main id="main" className="main">
  <div className="pagetitle">
    <h1>Project Details</h1>
    <nav>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="index.html">Home</a>
        </li>
        <li className="breadcrumb-item active">View Project</li>
      </ol>
    </nav>
  </div>

  <section className="section">
  <div className="row">
  <div className="col-lg-12 mb-3">
  <button type="button" onClick={()=>navigate('/create')} class="btn btn-primary"><i class="bi bi-plus"></i> &nbsp;Add Task</button>
  </div>
  <div className="col-lg-12">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Details</h5>
          {/* Table with stripped rows */}
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Task Tittle</th>
                <th scope="col">Deadline</th>
                <th scope="col">Priority</th>
                <th scope="col">Status</th>
                <th scope="col">Assigned to</th>
                <th scope="col">View</th>
                <th scope="col">Edit</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>
            <tbody>
            <tr>
            
            <td>Brandon Jacob</td>
            <td>Designer</td>
            <td>10.10.23</td>
            <td>Pending</td>
            <td>Brandon Jacob</td>
            
            <td><button type="button" onClick={()=>navigate("/viewtask")} class="btn btn-success">view</button></td>
            <td><button type="button" class="btn btn-warning">Edit</button></td>
            <td><button type="button" class="btn btn-danger">Delete</button></td>
          </tr>
              <tr>
            
            <td>Brandon Jacob</td>
            <td>Designer</td>
            <td>10.10.23</td>
            <td>Pending</td>
            <td>Brandon Jacob</td>
            
            <td><button type="button" class="btn btn-success">Edit</button></td>
            <td><button type="button" class="btn btn-warning">Edit</button></td>
            <td><button type="button" class="btn btn-danger">Delete</button></td>
          </tr>
          <tr>
            
            <td>Brandon Jacob</td>
            <td>Designer</td>
            <td>10.10.23</td>
            <td>Pending</td>
            <td>Brandon Jacob</td>
            
            <td><button type="button" class="btn btn-success">Edit</button></td>
            <td><button type="button" class="btn btn-warning">Edit</button></td>
            <td><button type="button" class="btn btn-danger">Delete</button></td>
          </tr>
          <tr>
            
            <td>Brandon Jacob</td>
            <td>Designer</td>
            <td>10.10.23</td>
            <td>Pending</td>
            <td>Brandon Jacob</td>
            
            <td><button type="button" class="btn btn-success">Edit</button></td>
            <td><button type="button" class="btn btn-warning">Edit</button></td>
            <td><button type="button" class="btn btn-danger">Delete</button></td>
          </tr>
          <tr>
            
            <td>Brandon Jacob</td>
            <td>Designer</td>
            <td>10.10.23</td>
            <td>Pending</td>
            <td>Brandon Jacob</td>
            
            <td><button type="button" class="btn btn-success">Edit</button></td>
            <td><button type="button" class="btn btn-warning">Edit</button></td>
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

export default View