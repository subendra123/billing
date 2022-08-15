import React from 'react'
import './Modal.css'

const Modal = ({show}) => {
    if(!show) {
        return null;
    }
  return (
    <>
    <div className='modeWrapper shadow p-3 mb-5 bg-body rounded'>
        <div className='modal_header'>
            <h5>Select or Add Customer</h5>

        </div>
        <div className='add_modal_customer'>
                <h6>Create New Customer</h6>
        </div>
        <div className='customer_modal_search'>
            <input type="text" name='' placeholder='Search Customer...' />

        </div>

        <div className='modal_searchable_customer'>
        <div className="table-responsive">
        <table className="table table-responsive table-borderless">
                         
                         <tbody>

                                     <tr>
                                    <td>#0071</td>
                                   <td>Alex </td>
                                   <td>8977776709</td>
                                   <td>Bangalore </td>
                                   <td><i class="ri-arrow-right-s-line "></i></td>
                                    </tr>
                                    <tr>
                                    <td>#0071</td>
                                   <td>Alex </td>
                                   <td>8977776709</td>
                                   <td>Bangalore </td>
                                   <td><i class="ri-arrow-right-s-line"></i></td>
                                    </tr>

                                    <tr>
                                    <td>#0071</td>
                                   <td>Alex </td>
                                   <td>8977776709</td>
                                   <td>Bangalore </td>
                                   <td><i class="ri-arrow-right-s-line"></i></td>
                                    </tr>


                            
                         </tbody>
                     </table>
                 </div>

        </div>
   
    </div>
         
 
   
      
    </>
  )
}

export default Modal
