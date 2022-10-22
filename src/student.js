import axios from 'axios'
import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
import { useState } from "react"
function Student() {
    const [student, setstudent] = useState([])
    useEffect(() => {
        studenttable()
    }, [])
    const studenttable = async () => {
        try {
            var result = await axios.get("https://63493bc20b382d796c811987.mockapi.io/student")
            setstudent(result.data)
        }
        catch (error) {
            alert("error")
        }
    }
    function deleteUser(id) {

        console.log(id)
        var deletestudent = axios.delete(`https://63493bc20b382d796c811987.mockapi.io/student/${id}`)
        studenttable()
    }
    return (
        <>
            <div class="container-fluid">
                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 class="h3 mb-0 text-gray-800">Students List</h1>
                    <Link to="/students/addstu" href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                        class="fas fa-download fa-sm text-white-50"></i> Add Student</Link>
                </div>
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Students DataTables</h6>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>FatherName</th>
                                        <th>Country</th>
                                        <th>State</th>
                                        <th>City</th>
                                        <th>Dob</th>
                                        <th>Class</th>
                                        <th>Gender</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>FatherName</th>
                                        <th>Country</th>
                                        <th>State</th>
                                        <th>City</th>
                                        <th>Dob</th>
                                        <th>Class</th>
                                        <th>Gender</th>
                                        <th>Action</th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    {

                                        student.map((addstudent) => {
                                            return (
                                                <tr>
                                                    <td>{addstudent.id}</td>
                                                    <td>{addstudent.name}</td>
                                                    <td>{addstudent.fathername}</td>
                                                    <td>{addstudent.country}</td>
                                                    <td>{addstudent.state}</td>
                                                    <td>{addstudent.city}</td>
                                                    <td>{addstudent.dob}</td>
                                                    <td>{addstudent.class}</td>
                                                    <td>{addstudent.gender}</td>
                                                    <td>
                                                        <Link to={`/students/:${addstudent.id}`} type="button" class="btn btn-warning">Update</Link>
                                                        <button type="button" class="btn btn-danger" onClick={() => deleteUser(addstudent.id)}>Delete</button>
                                                    </td>
                                                </tr>
                                            )
                                        })

                                    }
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Student;