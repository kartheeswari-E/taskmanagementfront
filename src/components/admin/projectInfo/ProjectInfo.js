import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Moment from "react-moment";

function ProjectInfo() {
  const { id, status } = useParams()
  const navigate = useNavigate();

  const [projectdata, setprojectdata] = useState({});
  const [taskdata, settaskdata] = useState([]);
  useEffect(() => {
    loadData()
  }, [])
  const [query, setquery] = useState("");



  let loadData = async () => {
    try {
      let projectdatum = await axios.get(`${process.env.REACT_APP_API_URL}/getproject/${id}`);

      console.log(projectdatum.data)
      setprojectdata(projectdatum.data);
      settaskdata(projectdatum.data.task.reverse());

    } catch (error) {
      console.log(error)
    }
  }

  const handledelete = async () => {



    try {
      let projectData = await axios.post(`${process.env.REACT_APP_API_URL}/setdeleteproject/${projectdata._id}`);

      if (projectData.status == 200) {
        navigate(`/home/liveprojects`)


      }

    } catch (error) {
      console.log(error)
    }
  };

  const handlesubmit = async () => {



    try {
      let projectData = await axios.post(`${process.env.REACT_APP_API_URL}/setcompleteproject/${projectdata._id}`);

      if (projectData.status == 200) {
        navigate(`/home/liveprojects`)


      }

    } catch (error) {
      console.log(error)
    }
  };
  return (
    <>

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
            <div className="col-lg-8 mb-3">
              <button type="button" onClick={() => navigate(`/home/createtask/${projectdata._id}`)} class="btn btn-primary"><i class="bi bi-plus"></i> &nbsp;Add Task</button>
            
            </div>
            
            {
              status == 1 ? <div className="col-lg-4 mb-3">
                <button type="button" onClick={() => { handlesubmit() }} class="btn btn-success">Completed</button>
                &nbsp;<button type="button" onClick={() => { handledelete() }} class="btn btn-danger">Delete</button>
              </div> : <div className="col-lg-4 mb-3">
                <button type="button" onClick={() => { handledelete() }} class="btn btn-danger">Delete</button>
              </div>
            }
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{projectdata.tittle}</h5>
                  <div className="search-bar mt-3 mb-3">
    <form
      className="search-form d-flex align-items-center"
      method="POST"
      action="#"
    >
      <input
        type="text"
        onChange={(e) => setquery(e.target.value)}
        name="query"
        placeholder="Live Search"
        title="Enter search keyword"
      />
    </form>
  </div>
                  {/* Table with stripped rows */}
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">Task Tittle</th>
                        <th scope="col">Created At</th>
                        <th scope="col">Deadline</th>

                        <th scope="col">Status</th>
                        <th scope="col">Assigned to</th>

                        <th scope="col">Edit</th>

                      </tr>
                    </thead>
                    <tbody>


                      {

                        taskdata.filter(
                          (user) =>
                            user.status.toLowerCase().includes(query) ||
                            user.to.toLowerCase().includes(query)||user.task_name.toLowerCase().includes(query)
                        ).map((data, i) => {
                          return (
                            <tr>
                              <td>{data.task_name}</td>
                              <td>  <Moment format="D/MMM/YYYY" withTitle>
                              {data.from}
                            </Moment></td>
                              <td>  <Moment format="D/MMM/YYYY" withTitle>
                              {data.to}
                            </Moment></td>

                              <td className={
          data.status ==="not started"
            ? "primary"
            : data.status === "completed"
            ? "success"
            : data.status === "In Progress"
            ? "warning"
            : "danger"
        }>{data.status}</td>
                              <td>{data.asigned_to}</td>
                              <td><button type="button" onClick={() => navigate(`/home/liveprojects/viewproject/edittask/${projectdata._id}/${data.task_id}`)} class="btn btn-warning">Edit</button></td>
                            </tr>

                          )
                        })
                      }


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
  )
}

export default ProjectInfo