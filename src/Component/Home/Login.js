import React, { useState } from 'react'
import { useFormik } from "formik";
import * as yup from "yup";
import { Navigate, useNavigate } from "react-router-dom";
import YupPassword from "yup-password";
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom'
import { TextField } from "@mui/material";

YupPassword(yup);
const formValidationschema = yup.object({
  email: yup.string().min(10, "please enter correct email").required("This is required"),
  password: yup
    .string()
    .password()
    .minLowercase(2)
    .min(
      8,
      "password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special"
    )
    .required("This is required"),
});

function Login() {
    const navigate = useNavigate();
    const[data,setdata]=useState([])
      const { handleChange, handleBlur, errors, touched, values, handleSubmit } =
        useFormik({
          initialValues: {
            email: "",
            password: "",
          },
          validationSchema: formValidationschema,
          onSubmit: (values) => {
            oldlist(values);
          },
        });
    
        
      const oldlist = async (values) => {
        try {
          await fetch(`http://localhost:4000/login/api/login`, {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }).then((res) => {
            if (res.status === 200) {
    window.alert("sucessfull login");
              navigate("/dashboard");
              window.localStorage.setItem("id",values.email);
            }
            else { 
                window.alert("Invalid Credentials");
                navigate("/");
              console.log(res.status);
            }
          });
          
        } catch (err) {
          console.log("error");
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
                  Login to Your Account
                </h5>
                <p className="text-center small">
                  Enter your username &amp; password to login
                </p>
              </div>
              <form className="row g-3 needs-validation" onSubmit={handleSubmit}>
                <div className="col-12">
                  <label htmlFor="yourUsername" className="form-label">
                    Username
                  </label>
                  <div className="input-group has-validation">
                    <span className="input-group-text" id="inputGroupPrepend">
                      @
                    </span>
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
                </div>
                <div className="col-12">
                  <label htmlFor="yourPassword" className="form-label">
                    Password
                  </label>
                  {/* <input type="text" name="username" class="form-control" id="yourUsername" required/> */}
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
                    Login
                  </button>
                </div>
                <div className="col-12">
                  <p className="small mb-0">
                    Don't have account?{" "}
                    <Link to="/register">Create an account</Link>
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

export default Login