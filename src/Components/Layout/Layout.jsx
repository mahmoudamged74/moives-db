import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import { Outlet ,useNavigate } from 'react-router-dom'

export default function Layout({userDate,setuserDate}) {

  let navigat=useNavigate();

  function logout() {
    localStorage.removeItem('userToken')
    setuserDate(null);
    navigat('login')
  }
  
  return (
  <>
  <Navbar userDate={userDate} logout={logout}/>


  <div className="container py-md-5 py-0">
  <Outlet></Outlet>

  </div>

  
  <Footer/>
  </>
    

  )
}
