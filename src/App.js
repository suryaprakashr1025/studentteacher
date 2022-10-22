import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import "./css/sb-admin-2.css"
import Teacher from './Teacher';
import Student from './student';
import Addteacher from './Addteacher';
import Update from './Update';

import Addstudent from './Addstudent';
import Update1 from './Update1';

function App() {
  return (

<BrowserRouter>
<div id="wrapper">
  <Sidebar></Sidebar>
  <div id="content-wrapper" class="d-flex flex-column">
  <Topbar></Topbar>
  
<Routes>
  <Route path='/teachers' element={<Teacher></Teacher>}></Route>
  <Route path='/teachers/addtecher' element={<Addteacher></Addteacher>}></Route>
  <Route path='/teachers/:id' element={<Update></Update>}></Route>

  <Route path='/students' element={<Student></Student>}></Route>
  <Route path='/students/addstu' element={<Addstudent></Addstudent>}></Route>
  <Route path='/students/:id' element={<Update1></Update1>}></Route>

</Routes>
</div>
</div>
</BrowserRouter>
  );
}

export default App;
