
import axios from 'axios'
import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
import {useState} from "react"
import { Form, useFormik } from 'formik'
import { useParams } from 'react-router-dom'
function Update1() {
  const Formik = useFormik({
    initialValues: {
      name: "",
      fathername: "",
      country: "India",
      state: "Tamilnadu",
      city: "Coimbatore",
      dob: "",
      class: "",
      gender: "Male"
    },
    validate: (values) => {
      const errors = {}
      if (!values.name) {
        errors.name = "please enter the name"
      }
      if (values.name.length <= 2 || values.name.length >= 15) {
        errors.name = "please enter the 3 to 15 characters"
      }
      if (!values.fathername) {
        errors.fathername = "please enter the fathername"
      }
      if (values.fathername.length <= 2 || values.fathername.length >= 15) {
        errors.fathername = "please enter the 3 to 15 characters"
      }

      var age = new Date().getFullYear() - values.dob.split("-")[0];
      if (age < 5) {
        errors.dob = "you have must above 18"
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        var users = await axios.put("https://63493bc20b382d796c811987.mockapi.io/student/"+params1, values)
      }
      catch (error) {
        alert("error")
      }
    }
  }
  )
  const params=useParams()
  let params1=params.id.split(":")[1]
  console.log(params1)
  return (
    <div class="container">
      <form onSubmit={Formik.handleSubmit} class="form-group">
        <div class="row">
          <div class="col-lg-6">
            <div class="form-group">
              <label>Name</label>
              <input
                name="name"
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
                value={Formik.values.name}
                type={"text"}
                class={`form-control
             ${Formik.errors.name ? 'error-box' : ""}
             ${Formik.touched.name && !Formik.errors.name ? 'success-box' : ""}`
                }
              />
              {
                Formik.errors.name ? <span style={{ color: "red" }}>{Formik.errors.name}</span> : null
              }
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group">
              <label>FatherName</label>
              <input
                name="fathername"
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
                value={Formik.values.fathername}
                type={"text"}
                class={`form-control 
            ${Formik.errors.fathername ? 'error-box' : ""}
            ${Formik.touched.fathername && !Formik.errors.fathername ? 'success-box' : ""}`
                }
              />
              {
                Formik.errors.fathername ? <span style={{ color: "red" }}>{Formik.errors.fathername}</span> : null
              }
            </div>
          </div>
          <div class="col-lg-4">
            <div class="form-group">
              <label>Country</label>
              <select
                name="country"
                onChange={Formik.handleChange}
                values={Formik.values.country}
                class="form-control">
                <option>India</option>
                <option>America</option>
                <option>China</option>
              </select>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="form-group">
              <label>State</label>
              <select
                name="state"
                onChange={Formik.handleChange}
                values={Formik.values.state}
                class="form-control">
                <option>Tamilnadu</option>
                <option>Delhi</option>
                <option>Mumbai</option>
              </select>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="form-group">
              <label>City</label>
              <select
                name="city"
                onChange={Formik.handleChange}
                values={Formik.values.city}
                class="form-control">
                <option>Coimbatore</option>
                <option>Chennai</option>
                <option>Madurai</option>
              </select>
            </div>
          </div>
         
          <div class="col-lg-4">
            <div class="form-group">
              <label>Date Of Birth</label>
              <input
                name="dob"
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
                value={Formik.values.dob}
                type={"date"}
                class={`form-control
                  ${Formik.errors.dob ? 'error-box' : ""}
                  ${Formik.touched.dob && !Formik.errors.dob ? 'success-box' : ""}
                `}
              />
              {
                Formik.errors.dob ? <span style={{ color: "red" }}>{Formik.errors.dob}</span> : null
              }
            </div>
          </div>
          <div class="col-lg-4">
            <div class="form-group">
              <label>Class</label>
              <input
                name="class"
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
                values={Formik.values.class}
                type={"text"}
                class={`form-control
              ${Formik.errors.class ? 'error-box' : ""}
              ${Formik.touched.class && !Formik.errors.class ? 'success-box' : ""}
              `}
              />
              {
                Formik.errors.class ? <span style={{ color: "red" }}>{Formik.errors.class}</span> : null
              }
            </div>
          </div>
          <div class="col-lg-4">
            <div class="form-group">
              <label>Gender</label>
              <select
                name="gender"
                onChange={Formik.handleChange}
                value={Formik.values.gender}
                class="form-control">
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
          </div>
          <div class="col-lg-4">
            <input type="Submit" />
          </div>

        </div>
      </form>
    </div>
    )
}

export default Update1;