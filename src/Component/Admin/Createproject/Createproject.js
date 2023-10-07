import React from 'react'
import { useState } from 'react';
import Nav from '../../Navigation/Nav';
function Createproject() {
    const [data, setdata] = useState({});

    const [namefocus, setnamefocus] = useState(false);
    const [descriptionfocus, setdescriptionfocus] = useState(false);
   
  
    const focuschange = () => {
        setnamefocus(true);
setdescriptionfocus(true);
      };
 

      const handlesubmit = async (e) => {
        e.preventDefault();
        console.log(data);
        fetch(`http://localhost:4000/createproject`, {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }).then((res) => {
          if (res.status === 201) {
            alert("sucessfully Created Task");
          } else {
            window.alert("Invalid Data");
            console.log(res.status);
          }
        });
      };
  return<>
<Nav/>
  <main id="main" class="main">
  <div className="awesome">
    <div className="pagetitle">
      <h1>Create Project</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="index.html">Home</a>
          </li>
          <li className="breadcrumb-item active">Create Project</li>
        </ol>
      </nav>
    </div>

    <section className="section">
  <div className="row d-flex justify-content-center">
    <div className="col-lg-6 ">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Create a new project</h5>
  
          <form onSubmit={handlesubmit}>
          <div class="col-12 mb-3">
                  <label for="inputNanme4" class="form-label">Project-Tittle</label>
                  <input 
                  type="text"
                  name="tittle"
                  value={data.tittle || ""}
                  required
                  onChange={(e) => {
                    setdata({ ...data, [e.target.name]: e.target.value });
                  }}
                  onBlur={() => {
                    setnamefocus(true);
                  }}
                  focused={namefocus.toString()}
                  
                  class="form-control" id="inputNanme4"/>
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


                <div class="text-center">
                  <button type="submit" onClick={focuschange} class="btn btn-primary">Submit</button>&nbsp;
                </div>
          </form>
       
        </div>
      </div>
    </div>
  </div>
</section>

  </div>
  </main>

  </>
}

export default Createproject