import React from 'react'
import { Outlet, Link } from "react-router-dom";
import logo from "./images/logo.png"
import request from "./images/rq.png"
import { useAuth } from './auth';

export default function Header() {
  const {user,logout}=useAuth();
  return (
    <div className=''>
           
      <div className='jsn-air-balloon request_quote'>
         <img src={request} className="" alt='' />
      </div>
      <nav className='menu'>

        <ul>
          <li className=''>
          <Link to="Home"><img src={logo} className="logo-img" alt='' /></Link>       
          </li>
          <li className='menu-n'>
          <Link to="Home">Home</Link>
          </li>
          <li className='menu-n'>
          <Link to="About">About</Link>
          </li>
          
          <li className='menu-n'>
          <Link to="Products">Products</Link>
          </li>
          <li className='menu-n'>
          <Link to="Images">Images</Link>
          </li>
          <li className='menu-n'>
          <Link to="Contact">Contact Us</Link>
          </li>
          
          <li className='menu-n'>
          <Link to="Users">Customers</Link>
          </li>
          
          <li className='menu-n'>
          <Link to="Customers">Employees</Link>
          </li>
          <li className='menu-n'>
            {
           user ? <Link to="Home" onClick={logout}>Logout</Link> : <Link to="Login">Login</Link>
            }
          </li>

        </ul>
      </nav>


      <Outlet/>

    </div>
  )
}
