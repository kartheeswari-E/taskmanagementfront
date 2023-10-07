import React from 'react'
import Nav from '../../Navigation/Nav'
import { useNavigate } from 'react-router-dom'

function Team() {
  const navigate=useNavigate();
  return<>
  <Nav/>
  <main id="main" className="main">
  <div className="pagetitle">
    <h1>Team Members</h1>
    <nav>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="index.html">Home</a>
        </li>
        <li className="breadcrumb-item active">Team Details</li>
      </ol>
    </nav>
  </div>

  <section className="section">
  <div className="row">
  <div className="col-lg-12 mb-3">
  <button type="button" onClick={()=>navigate('/register')} class="btn btn-primary"><i class="bi bi-person-plus"></i> &nbsp;Add Team Members</button>
  </div>
    <div className="col-lg-12">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Details</h5>
          {/* Table with stripped rows */}
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Position</th>
              
                <th scope="col">Remove</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Brandon Jacob</td>
                <td>Designer</td>
                <td>email@gmail.com</td>
                
              
         
                <td><button type="button" class="btn btn-danger">Delete</button></td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Bridie Kessler</td>
                <td>Developer</td>
                <td>35</td>
   
                <td><button type="button" class="btn btn-danger">Delete</button></td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Ashleigh Langosh</td>
                <td>Finance</td>
                <td>45</td>
       
                <td><button type="button" class="btn btn-danger">Delete</button></td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Angus Grady</td>
                <td>HR</td>
                <td>34</td>
     
                <td><button type="button" class="btn btn-danger">Delete</button></td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Raheem Lehner</td>
                <td>Dynamic Division Officer</td>
                <td>47</td>

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

export default Team
