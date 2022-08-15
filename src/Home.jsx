import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import BillingDashboard from './features/billing_dashboard/BillingDashboard';
import SideNav from './components/sidenav/SideNav';
import Store_Register from './components/create/Store_Register';

function Home() {
  return (
    <>
    <Routes>
      <Route path='store_register' element={ <Store_Register />} />
      <Route path='/' element={ <BillingDashboard />} />
      <Route path='/sidenav' element={ <SideNav />} />
    </Routes>



  </>
  );
}

export default Home;
