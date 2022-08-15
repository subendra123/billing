import React, { useEffect, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { SidebarData } from '../sidenav/SidebarData'
import Modal from '../../components/modal/Modal'
import './create.css'

const Create_store_staff = () => {
    const [sidebar, setSidebar] = useState(false);

    const [show, setShow] = useState(false)
  
    const showSidebar = () => {
      setSidebar(!sidebar);
  
    }

  return (
        <>
        
    
  <div className="container-fluid">
                     <div className="row ">
                       <div className="col-lg-4 bg-light pt-3 header_top_nav">
                         <div className="row ">
                           <div className="col-lg-6 col-12  ">
                             <div className="menu_bar_style">
                               <i  className="ri-menu-line ri-lg menu_icon"   onClick={showSidebar} ></i>
                             </div>

                          <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
                          <ul className='nav-menu-items'>
                              <li className='navbar-toggle'>
                                <NavLink to="#" className="menu-bars">
                                <i class="ri-close-fill"></i>
                                </NavLink>
                              </li>
                                {
                                  SidebarData.map((item, index) => {
                                        return(
                                          <li key={index} className={item.cName}>
                                            <NavLink to={item.path}>
                                              {item.icon}
                                              <span>{item.title}</span>
                                            </NavLink>
                                          </li>
                                        )
                                  })
                                }

                          </ul>

                          </nav>

                           </div>
                           <div className="col-lg-6 col-12 ">
                             <div className="heading_new_order">
                              <span>Create New</span>
                             </div>
                           </div>
                         </div>
             
                       
             </div>

             <div className='col-lg-8  pt-3 store_register_right'>
                    <div className='store_regiser_container'>
                                    <h3 className='text-center'>  Create User Staff </h3>
                    </div>

             </div>
             </div>

              <div className='register_new_container'>
                        <div className='store_register_box  shadow p-3 mb-5 bg-body rounded'>
                               <h6 className='fw-bold text-center'> Create store Staff</h6>
                                <form class="form-card" onsubmit="event.preventDefault()">
                    <div class="row justify-content-between text-left">
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3"> First Name<span class="text-danger"> *</span></label> <input type="text" id="fname" name="fname" placeholder="First Name" onblur="validate(1)" /> </div>
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Last Name</label> <input type="text" id="lname" name="lname" placeholder="Last Name" onblur="validate(2)" /> </div>
 
                    </div>
                    <div class="row justify-content-between text-left">
                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Email<span class="text-danger"> *</span></label> <input type="text" id="lname" name="lname" placeholder="Enter Email" onblur="validate(2)" /> </div>
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Phone<span class="text-danger"> *</span></label> <input type="text" id="fname" name="fname" placeholder=" Phone" onblur="validate(1)" /> </div>
                   

                    </div>
                    <div class="row justify-content-between text-left">
                    <div class="form-group col-sm-4 flex-column d-flex"> <label class="form-control-label px-3">Position<span class="text-danger"> *</span></label> <input type="text" id="fname" name="fname" placeholder="Position" onblur="validate(1)" /> </div>
                        <div class="form-group col-sm-4 flex-column d-flex"> <label class="form-control-label px-3">Password<span class="text-danger"> *</span></label> <input type="text" id="fname" name="fname" placeholder="Password" onblur="validate(1)" /> </div>
                        <div class="form-group col-sm-4 flex-column d-flex"> <label class="form-control-label px-3">Confirm Password<span class="text-danger"> *</span></label> <input type="text" id="lname" name="lname" placeholder="Confirm Password" onblur="validate(2)" /> </div>
                     
                    </div>
                    
                   
                    
                    <div class="row justify-content-end m-3 ml-n3">
                        <div class="form-group col-sm-6"> <button type="submit" class="btn-block ">Create Store Staff</button> </div>
                    </div>
                </form>

                        </div>
              </div>
             
             </div>
            
        </>
  )
}

export default Create_store_staff