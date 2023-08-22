import React from 'react'
import { Outlet, Link } from "react-router-dom";
import {Nav} from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Leftmenu() {
  return (
    <>
    
    <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
    activeKey="/home"
    onSelect={selectedKey => alert(`selected ${selectedKey}`)}
    >
        <div className="sidebar-sticky"></div>
    <Nav.Item className='left-m'>
        <Link to="/Dashboard">Dashboard</Link>
    </Nav.Item>
    <Nav.Item className='left-m'>
        <Link to="/Customers">Customers</Link>
    </Nav.Item>
    <Nav.Item className='left-m'>
        <Link to="/Employees">Employees</Link>
    </Nav.Item>
    </Nav>
    <Outlet/>

</>
  )
}
