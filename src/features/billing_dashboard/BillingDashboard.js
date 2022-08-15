import React, { useEffect, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { selectProductLoadingStatus, selectProducts, fetchProductsAsync } from '../../slices/catalogue/productSlice'
import { selectBillItems, addItem, increaseQuantity, decreaseQuantity } from '../../slices/catalogue/billingSlice'
import Modal from '../../components/modal/Modal'
import { NavLink } from 'react-router-dom'
import { SidebarData } from '../../components/sidenav/SidebarData'
import './BillingDashboard.css'



const BillingDashboard = () => {
  const [sidebar, setSidebar] = useState(false);

  const [show, setShow] = useState(false)

    const dispatch = useDispatch();
    const products = useSelector(selectProducts);
    const status = useSelector(selectProductLoadingStatus);

    const billItems = useSelector(selectBillItems);

    const total_amount = billItems.reduce((acc, item) => {
        return acc + item.total;
    }, 0);

    const total_quantity = billItems.reduce((acc, item) => {
        return acc + item.quantity;
    }, 0);

    const total_cgst = billItems.reduce((acc, item) => {
        return acc + item.cgst;
    }, 0);

    const total_sgst = billItems.reduce((acc, item) => {
        return acc + item.sgst;
    }, 0);


    useEffect(() => {
        dispatch(fetchProductsAsync());
    }, [dispatch]);


    if (status === 'fetching') {
        return <div>Loading...</div>
    }

    const showSidebar = () => {
      setSidebar(!sidebar);

    } 
    
    return (
        <div>

    
  

<div className="App">
             
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
                               <i className="ri-add-line ri-lg"></i> <span>New Order</span>
                             </div>
                           </div>
                         </div>
             
                         <div className="second_top_nav_left">
                           <div className="row">
                             <div className="col-lg-5 col-12">
                               <div className="second_top_nav_search">
                                 <input
                                   type="text"
                                   name="search"
                                   placeholder="Search products..."
                                 />
                               </div>
                             </div>
                             <div className="col-lg-5 ">
                               <div className="secondt_top_nav_prod_category">
                                 <select className="custom_select_box">
                                   <option>Electronics</option>
                                   <option>Footwear</option>
                                   <option>Fashions</option>
                                   <option>Grocessory</option>
                                   <option>Clothes</option>
                                   <option>Others</option>
                                 </select>
                               </div>
                             </div>
                             <div className="col-lg-2  ">
                               <div className="barcode_style">
                                 <i className="ri-barcode-fill ri-2x"></i>
                               </div>
                             </div>
                           </div>
                         </div>
             
                         
             
                         <div className="leftside_product_style">
                           <div className="row">
                             <div className="col-12 col-12">
                              
                                   <div className="table-responsive">
                                         <table className="table table-responsive table-borderless">
                         
                         <tbody>

                         {
                             products.map((product) => {
                                 return(
                                     <>
                                     <tr>
                                         <td>
                                   <div className="sidebar_image_left">
                                  {/* <NavLink to={`/BillingProducts/${product.id}`}> </NavLink> */}
                                   <img src={product.image} width="25"   alt="No Image"  onClick={() => dispatch(addItem({ product }))}/> 
                                  
                                 
                                   </div>
                                   </td>
                                   
                                   <td>
                                   <div className="sidebar_left_image_title">
                                   <p>{product.name}</p>
                                   <small>Black </small>
                                   <small>Medium </small>
                                   <small>Black  </small>
                                   <small>Medium </small>
                                   </div>
                                    
                                   </td>
                               
                                 <td>
                                   <div className="sidebarleft_price">
                                    
                                     <h6>{product.selling_price}</h6>
                                   </div>
                                 </td>
                                 </tr>

                                     </>
                                 )
                             })
                         }
                         
                                        
             
                                        
                                
                                
                            
             
                           
                            
                         </tbody>
                     </table>
                 </div>
             
             
                             </div>
                           </div>
                         </div>
                       </div>
             
                       {/*   Write Side Div Start  */}
             
                       <div className="col-lg-8 col-12 ">
                         <div className="right_side_top">
                         <div className="right_side_top_search">
                         <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">8792581670</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
  </li>
 
</ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">This is dummmy number of customer</div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">This is billing shop</div>
 
</div>
                               </div>
                           <div className="right_side_left">
                               
                           <div className="right_side_search">
                         <NavLink to="/admin"> <button className='m-3'>Admin </button></NavLink>
                           <button onClick={ () => setShow(true)}>Customer</button>
                           <Modal show={show}></Modal>
                               </div>
                        
                
                             
                           </div>
                         </div>
             
                         <div className="row mt-3">
                            {billItems.length > 0 ?

                                <div className="table_style_billig  shadow-sm p-3 mb-4 bg-body rounded">
                             <div className="container ">
                
                 <div className="table-responsive">
                     <table className="table table-responsive table-borderless">
                         <thead>
                             <tr className="bg-light">
                                
                                
                                 <th scope="col" width="10%"><small>Product</small> </th>
                                 <th scope="col" width="25%"><small>Features</small></th>
                                 <th scope="col" width="25%"><small>Price & QTY</small></th>
                                 <th scope="col"  width="20%"><span><small>Amount</small></span></th>
                                 <th scope="col"  width="40%"><span><small>Tax</small></span></th>
                                 <th scope="col"  width="20%"><span><small>Update</small> </span></th>
                             </tr>
                         </thead>
                         <tbody>

                         {
                            billItems.map((item, index) => {
                                return(
                                    <>
                                    <tr>
                             
                             <td>
                               <div className="added_product_img">
                               <img src={item.product.image}  width="25" /> 
                               </div>
                               </td>
                               
                               <td>
                               <div className="image_properities">
                               <p>{item.product.name}</p>
                               <small>small </small>
                               <small> Medium -</small>
                               </div>
                                
                               </td>
                           
                             <td>
                               <div className="price_calculate_update">
                                 <h6> {item.product.selling_price} &nbsp; X</h6>
                                 <h6> {item.quantity} </h6>
                               </div>
                             </td>
                             <td>
                               <div className="added_amount_style">
                                   <h6>{item.total}</h6>
                               </div>
                             </td>
                             <td >
                               <div className="tax_types">
                                   <small>CGST: {item.cgst}</small>
                                   <small>IGST :{item.sgst}</small>
                                   
                               </div>
                             </td>
                             <td>
                             <div className="product_increase_decrese_style">
                             <i  className="ri-arrow-up-s-line"   onClick={() => { dispatch(increaseQuantity({ productId:item.product.id})) }} ></i>
                             <i className="ri-arrow-down-s-line" onClick={() => { dispatch(decreaseQuantity({ productId:item.product.id})) }} ></i>
                             </div>
                             
                             </td>
                         </tr>

                                    </>
                                )
                            })
                         }
                             
             
                        
                               
                        
                            
                            
                            
                         </tbody>
                     </table>
                 </div>
             </div>
               </div>

                            
                            
                            
                            
                            :
                            <div className='empty_cart_style'>
                                <img src='images/emptycart.png'  width="100%"/>

                            </div>
                             }
                             
             
                          
                           
                          
             
                           <div className="tax_discount_section shadow-sm  rounded ">
                             <div className="row ">
                             <div className="col-lg-3 col-12  ">
                             <div className="sub_total_style">
                                   <h3>Sub - Total</h3>
                             </div>
                             </div>
             
             
                             
                             <div className="col-lg-9 ">
                               <div className="subtotal_price_right">
                               <h3> Total Amount: {total_amount}</h3>
                               <h3> Total Quantity: {total_quantity}</h3>

                               <h3> Total CGST: {total_cgst}</h3>
                               <h3> Total SGST: {total_sgst}</h3>
                              
                           
                              
                               
                               </div>
                             </div>
             
                             
                            
                            
                             
                             
                             
                             </div>
                             
                       
                            
                            
                           </div>
             
                          
             
             
                            
                             
               
                           <div className="product_save_remove  shadow-sm    rounded ">
                             <div className="row ">
                               <div className="col-lg remove_all_order ">
                                 <h3>
                                   {" "}
                                   Remove All <i className="ri-close-line ri-sm p-1"></i>{" "}
                                 </h3>
                               </div>
                               <div className="col-lg remove_all_order ">
                                 <h3>
                                   Save Order <i className="ri-save-line ri-sm p-1"></i>
                                 </h3>
                               </div>
                               <div className="col-lg added_checkout ">
                                 <h3>
                                   {" "}
                                   <i className="ri-check-line ri-sm"></i> Checkout{" "}
                                 </h3>
                               </div>
                             </div>
                           </div>
             
                      
             
                         </div>
                       </div>
                     </div>
                   </div>
             
         
             
                   
                 
                 </div>

           
        </div>





    )
}

export default BillingDashboard