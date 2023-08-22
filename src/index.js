import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import reportWebVitals from './reportWebVitals';
// import About from './About';
import Contact from './Contact';
import Images from './Images';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from './NoPage';
import Register from './Register';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import Home from './Home';
import Users from './Users';
import Products from './Products';
import Productsdetails from './Productsdetails';
import { AuthProvider } from './auth';
import PrivateRoute from './PrivateRoute';
import Master from './Master';
import Customers from './Customers';
// import Customer_Edit from './Customer_edit';

const LazyAbout=React.lazy(()=>import("./About"));
export default function Abc() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>}>
          <Route path="Home" element={<Home />} />
              <Route index element={<Home/>}/>
          <Route path="About" element={
          <React.Suspense fallback="Loading...">
            <LazyAbout />
            </React.Suspense>
          }
           />
          <Route path="Products" element={<Products />} />
             <Route path="/Products/:productId" element={<Productsdetails />} />
          <Route path="Images" element={<Images/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="Users" element={
          <PrivateRoute>
            <Users/>
            </PrivateRoute>
          } />
          <Route path="Register" element={<Register/>} />
          <Route path="Master" element={<Master/>} />
          <Route path="Login" element={<Login/>} />
          <Route path="Customers" element={<Customers/>} />
          {/* <Route path="/Customers/:CustomerId" element={<Customer_Edit/>} /> */}

          <Route path="*" element={<NoPage/>} />

        </Route>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Abc />
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
