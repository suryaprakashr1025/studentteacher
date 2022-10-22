import axios from 'axios'
import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
import {useState} from "react"
function Teacher() {
    const [teacher, setTeacher] = useState([])
    useEffect(() => {
        teachertable()
    }, [])
    const teachertable = async () => {
        try {
            var result = await axios.get("https://63493bc20b382d796c811987.mockapi.io/teacherstudent")
            console.log(result)
            setTeacher(result.data)
        }
        catch (error) {
            alert("error")
        }
    }
 
    function deleteUser(id) {
    
        var deleteteacher=  axios.delete(`https://63493bc20b382d796c811987.mockapi.io/teacherstudent/${id}`)
        teachertable()
    }
       
   
  
     
    return (
        <>
            <div class="container-fluid">
                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 class="h3 mb-0 text-gray-800">Teachers List</h1>
                    <Link to="/teachers/addtecher" href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                        class="fas fa-download fa-sm text-white-50"></i> Add Teacher</Link>
                </div>
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Teachers DataTables</h6>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Country</th>
                                        <th>City</th>
                                        <th>State</th>
                                        <th>Phone</th>
                                        <th>Dob</th>
                                        <th>Gender</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Country</th>
                                        <th>City</th>
                                        <th>State</th>
                                        <th>Phone</th>
                                        <th>Dob</th>
                                        <th>Gender</th>
                                        <th>Action</th>
                                    </tr>
                                </tfoot>
                                    <tbody>
                                        {

                                            teacher.map((addtecher) => {
                                                return (
                                                    <tr>
                                                        <td>{addtecher.id}</td>
                                                        <td>{addtecher.name}</td>
                                                        <td>{addtecher.email}</td>
                                                        <td>{addtecher.country}</td>
                                                        <td>{addtecher.city}</td>
                                                        <td>{addtecher.state}</td>
                                                        <td>{addtecher.phone}</td>
                                                        <td>{addtecher.dob}</td>
                                                        <td>{addtecher.gender}</td>
                                                        <td>
                                                            <Link to={`/teachers/:${addtecher.id}`}type="button" class="btn btn-warning" >Update</Link>
                                                            <button type="button" class="btn btn-danger" onClick={()=>deleteUser(addtecher.id)}>Delete</button>
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

export default Teacher;