import React, { useEffect } from 'react'
import "./EditTask.css"
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
function EditTask() {
    let navigate = useNavigate();
    const { id, taskid } = useParams()
    const [data, setdata] = useState({});

    const [namefocus, setnamefocus] = useState(false);
    const [descriptionfocus, setdescriptionfocus] = useState(false);
    const [createfocus, setcreatefocus] = useState(false);
    const [deadlinefocus, setdeadlinefocus] = useState(false);
    const [assignfocus, setassignfocus] = useState(false);


    const focuschange = () => {
        setnamefocus(true);
        setdescriptionfocus(true);
        setdeadlinefocus(true);
        setassignfocus(true);
        setcreatefocus(true);
    };


    const [taskdata, settaskdata] = useState({});

    const [userdata, setuserdata] = useState([]);
    useEffect(() => {
        loadData()
        loadTask()
    }, [])


    let loadData = async () => {
        try {
            let userdatum = await axios.get(`${process.env.REACT_APP_API_URL}/allusers`);

            console.log(userdatum)
            setuserdata(userdatum.data);
        } catch (error) {
            console.log(error)
        }
    }

    let loadTask = async () => {
        try {
            let userdatum = await axios.get(`${process.env.REACT_APP_API_URL}/getproject/${id}`);
           if(userdatum){
            let tasks = userdatum.data.task
            tasks.map((tas) => {
                if (tas.task_id == taskid) {
                    setdata(tas);
                }
            })

           }
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async () => {


        focuschange()


        try {
          let projectData = await axios.post(`${process.env.REACT_APP_API_URL}/deletetask/${id}`, data);
    
          if (projectData.status == 200) {
            navigate(`/home/liveprojects/viewproject/${id}/1`)
    
    
          }
    
        } catch (error) {
          console.log(error)
        }
      };


    const handleUpdate = async (e) => {

        focuschange()
        e.preventDefault();
        console.log(data);
        data.status = "not started"
        {
            userdata.map((user) => {
                if (data.asigned_id == user._id) {
                    return data.asigned_to = user.name
                }
            })
        }
        try {
            let projectData = await axios.post(`${process.env.REACT_APP_API_URL}/updatetask/${id}`, data);
            console.log(projectData)
            if (projectData.status == 200) {
                navigate(`/home/liveprojects/viewproject/${id}/1`)

            }

        } catch (error) {
            console.log(error)
        }
    };

    return <>

        <main id="main" class="main">
            <div className="awesome">
                <div className="pagetitle">
                    <h1>Edit-Task</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="index.html">Home</a>
                            </li>
                            <li className="breadcrumb-item active">Edit</li>
                        </ol>
                    </nav>
                </div>

                <section className="section">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-6 ">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Edit This Task</h5>
                                    {/* General Form Elements */}
                                    <form onSubmit={handleUpdate }>
                                        <div class="col-12 mb-3">
                                            <label for="inputNanme4" class="form-label">Task-Tittle</label>
                                            <input
                                                type="text"
                                                name="task_name"
                                                value={data.task_name || ""}
                                                required
                                                onChange={(e) => {
                                                    setdata({ ...data, [e.target.name]: e.target.value });
                                                }}
                                                onBlur={() => {
                                                    setnamefocus(true);
                                                }}
                                                focused={namefocus.toString()}

                                                class="form-control" id="inputNanme4" />
                                            <span className="span">required</span>
                                        </div>
                                        <div class="col-12 mb-3">
                                            <label for="inputNanme4" class="form-label">Description</label>
                                            <textarea
                                                className="form-control"
                                                style={{ height: 100 }}
                                                name="description"
                                                value={data.description || ""}
                                                required
                                                onChange={(e) => {
                                                    setdata({ ...data, [e.target.name]: e.target.value });
                                                }}
                                                onBlur={() => {
                                                    setdescriptionfocus(true);
                                                }}
                                                focused={descriptionfocus.toString()}
                                            />
                                            <span className="span">required</span>
                                        </div>


                                        <div className="col-12 mb-3">
                                            <label htmlFor="inputDate" className="form-label">
                                                Start on
                                            </label>
                                            <div className="col-sm-12">
                                                <input type="date"
                                                    name="from"
                                                    value={data.from || ""}
                                                    required
                                                    onChange={(e) => {
                                                        setdata({ ...data, [e.target.name]: e.target.value });
                                                    }}
                                                    onBlur={() => {
                                                        setcreatefocus(true);
                                                    }}
                                                    focused={createfocus.toString()} className="form-control" />
                                                <span className="span">required</span> </div>

                                        </div>

                                        <div className="col-12 mb-3">
                                            <label htmlFor="inputDate" className="form-label">
                                                Deadline
                                            </label>
                                            <div className="col-sm-12">
                                                <input type="date"
                                                    name="to"
                                                    value={data.to || ""}
                                                    required
                                                    onChange={(e) => {
                                                        setdata({ ...data, [e.target.name]: e.target.value });
                                                    }}
                                                    onBlur={() => {
                                                        setdeadlinefocus(true);
                                                    }}
                                                    focused={deadlinefocus.toString()} className="form-control" />
                                                <span className="span">required</span> </div>

                                        </div>


                                        <div className="col-12 mb-3">
                                            <label className="form-label">Assign To</label>
                                            <div className="col-sm-12">

                                                <select
                                                    className="form-select"
                                                    aria-label="Default select example"
                                                    name="asigned_id"
                                                    value={data.asigned_id || ""}
                                                    onChange={(e) => {
                                                        setdata({ ...data, [e.target.name]: e.target.value });
                                                    }}
                                                    onBlur={() => {
                                                        setassignfocus(true);
                                                    }}
                                                    focused={assignfocus.toString()}
                                                    required
                                                >
                                                    <option name=""></option>
                                                    {
                                                        userdata.map((user) => {
                                                            return (
                                                                <option value={user._id}>{user.name}</option>

                                                            )
                                                        })
                                                    }
                                                </select>
                                                <span className="span">required</span>

                                            </div>
                                        </div>


                                        <div class="text-center">
                                            <button type="submit"  class="btn btn-primary">Update</button>&nbsp;
                                            <button  onClick={() => { handleDelete() }} class="btn btn-danger">Delete</button>&nbsp;
                                        </div>
                                    </form>
                                    {/* End General Form Elements */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </main>

    </>
}

export default EditTask