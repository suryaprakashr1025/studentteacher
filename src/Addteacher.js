import axios from 'axios'
import { Form, useFormik } from 'formik'
import React from 'react'

function Addteacher() {
  const Formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      country: "India",
      city: "",
      state: "",
      phone: "",
      dob: "",
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
      if (!values.email) {
        errors.email = "please enter the email"
      }
      if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "please enter the valid email"
      }
      if (!values.phone) {
        errors.phone = "please enter the phone"
      }
      if (parseInt(values.phone.length) !== 10) {
        errors.phone = "please enter the 10 number"
      }

      var age = new Date().getFullYear() - values.dob.split("-")[0];
      if (age < 18) {
        errors.dob = "you have must above 18"
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        var users = await axios.post("https://63493bc20b382d796c811987.mockapi.io/teacherstudent", values)
      }
      catch (error) {
        alert("error")
      }
    }
  }
  )
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
              <label>Email</label>
              <input
                name="email"
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
                value={Formik.values.email}
                type={"text"}
                class={`form-control 
            ${Formik.errors.email ? 'error-box' : ""}
            ${Formik.touched.email && !Formik.errors.email ? 'success-box' : ""}`
                }
              />
              {
                Formik.errors.email ? <span style={{ color: "red" }}>{Formik.errors.email}</span> : null
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
                class="form-control"
              >
                <option>India</option>
                <option>America</option>
                <option>China</option>
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
              <label>PhoneNo</label>
              <input
                name="phone"
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
                values={Formik.values.phone}
                type={"text"}
                class={`form-control
              ${Formik.errors.phone ? 'error-box' : ""}
              ${Formik.touched.phone && !Formik.errors.phone ? 'success-box' : ""}
              `}
              />
              {
                Formik.errors.phone ? <span style={{ color: "red" }}>{Formik.errors.phone}</span> : null
              }
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

export default Addteacher