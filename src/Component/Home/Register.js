import React, { useState } from 'react'
import { useFormik } from "formik";
import * as yup from "yup";
import { Navigate, useNavigate } from "react-router-dom";
import YupPassword from "yup-password";
import './Register.css'
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom';
YupPassword(yup)
  const formValidationschema=yup.object({
email:yup.string().min(10,"Error").required("This Is Required"),
name:yup.string().min(10,"Error").required("This Is Required"),
password:yup.string().password()
.minLowercase(2).min(
  8,
  "password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special")
.required("this is")

  });
function Register() {
    
    const navigate=useNavigate();

    const {handleChange,handleBlur,errors,touched,values,handleSubmit}=useFormik({
        initialValues:{
          name:"",
          email:"",
          password:""
        },
        validationSchema:formValidationschema,
        onSubmit:(values)=>{
          newlist(values);
        },
      });
const newlist=async(values)=>{
  try{
 await fetch("http://localhost:4000/register",{
      method:'POST',
       body:JSON.stringify(values),
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      }
     })
     .then((res)=>{    
              if(res.status===201){
              window.alert("successfull register");
                  navigate("/");
              }
            else{
    console.log(res.status)
    window.alert("email already used");
   }
   })
}
    catch(err){
      console.log("error")
    }

};
  return <>
  <div className="container">
  <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
          <div className="d-flex justify-content-center py-4">
            <Link
              to="/"
              className="logo d-flex align-items-center w-auto"
            >
              <img src={logo} alt="" />
              <span className="d-none d-lg-block">NiceAdmin</span>
            </Link>
          </div>
          {/* End Logo */}
          <div className="card mb-3">
            <div className="card-body">
              <div className="pt-4 pb-2">
                <h5 className="card-title text-center pb-0 fs-4">
                  Create an Account
                </h5>
                <p className="text-center small">
                  Enter your personal details to create account
                </p>
              </div>
              <form className="row g-3 needs-validation" onSubmit={handleSubmit}>
                <div className="col-12">
                  <label htmlFor="yourName" className="form-label">
                    Your Name
                  </label>
                  <input
                  name='name'
                  onChange={handleChange} 
                  onBlur={handleBlur} 
                  value={values.name} 
                  type="text"
                   placeholder='name'
                  error={errors.name && touched.name}
                  helperText={errors.name && touched.name?errors.name:"" }
                    className="form-control"
                
                  />
           
                </div>
                <div className="col-12">
                  <label htmlFor="yourEmail" className="form-label">
                    Your Email
                  </label>
                  <input
                   class="form-control"
                   name="email"
                   onChange={handleChange}
                   onBlur={handleBlur}
                   value={values.email}
                   type="email"
                   placeholder="email"
                   error={errors.email && touched.email}
                   helperText={errors.email && touched.email ? errors.email : ""}
                  />
               
                </div>
                <div className="col-12">
                  <label htmlFor="yourPassword" className="form-label">
                    Password
                  </label>
                  <input
                             class="form-control" 
                             name="password"
                             onChange={handleChange}
                             onBlur={handleBlur}
                             value={values.password}
                             type="password"
                             placeholder="password"
                             error={errors.password && touched.password}
                             helperText={
                               errors.password && touched.password ? errors.password : ""
                             }
                  />
                
                </div>
          
                <div className="col-12">
                  <button className="btn btn-primary w-100" type="submit">
                    Create Account
                  </button>
                </div>
                <div className="col-12">
                  <p className="small mb-0">
                    Already have an account?{" "}
                    <Link to="/">Log in</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  </section>
</div>

  </>
}

export default Register