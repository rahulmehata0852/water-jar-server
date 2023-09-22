import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const LoginProtected = ({ compo }) => {

  const { auth } = useSelector(state => state.admin)


  return auth ? compo : <h1 className='mx-auto mt-14'>Login to view this page
    <Link to={"/"} className='btn btn-secondary ms-5'>Log In</Link>
  </h1>
}

export default LoginProtected