import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Admin/components/Navbar'
import Login from './Admin/Pages/Login'
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from 'react-toastify'
import Dashboard from './Admin/Pages/Dashboard'
import LoginProtected from './Admin/Pages/LoginProtected'

const App = () => {
  return <>

    <BrowserRouter>
      <ToastContainer position='bottom-left' theme='dark' />
      <Navbar />
      <Routes>


        <Route path='/' element={<Login />} />
        <Route path='/admin/dash' element={<><LoginProtected compo={<Dashboard />} /></>} />



      </Routes>


    </BrowserRouter>




  </>
}

export default App