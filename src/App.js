import Header from "./components/Header";
import Card from "./components/Card";
import TodoContainer from "./components/TodoContainer";
import TodoAdd from "./components/TodoAdd";
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Login  from './pages/Login';
import SignUp from './pages/SignUp';
import  './index.css'
import Landing from './pages/Landing';
import { useState } from "react";


function App(){

   const [users,setUsers]=useState([
        {
            username:"Inthusha",
            password:"123"
        }
    ]);
  return(

  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Login users={users} setUsers={setUsers}/>}></Route>
  <Route path='/signUp' element={<SignUp users={users} setUsers={setUsers}/>}></Route>
  <Route path='/landing' element={<Landing/>}></Route>
  </Routes>
  </BrowserRouter>

  )
}

export default App;