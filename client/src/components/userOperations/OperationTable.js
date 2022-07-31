import React from 'react'
import { trimDataTime, itemsNum } from '../../utils/OperationsFunc'
import OperationModal from '../../utils/OperationModal'
import "./operation.css"

export default function OperationTable({props}) {

const {userData, handleDelete, handleEdit, showModal, setShowModal, modalFunctionDisplay, modalData} = props



  if(userData.length >0){

    const preparingData = trimDataTime(itemsNum(userData)) 

    return (

      <div className='table-responsive'>
        <table className="table table-bordered ">
        <thead>
          <tr>
            <th scope="col">Amount</th>
            <th scope="col">Concept</th>
            <th scope="col">Type</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {preparingData.map(op=>{
            return(
              <tr key={op.operation_id}>
                <td>{op.amount}</td>
                <td>{op.operation_concept}</td>
                <td>{op.operation_type}</td>
                <td>{op.operation_date}</td>
                
                <td >
                  <button className='editOperation' onClick={()=>modalFunctionDisplay(op)}></button>
                  
                  
                </td>
                
                
              </tr>
            )
          })}
          
        </tbody>
    </table>

    <OperationModal data={modalData}  showModal={showModal} setShowModal={setShowModal} handleDelete={handleDelete} handleEdit={handleEdit}></OperationModal>

     
        

      </div>
    
    )
   

  }
  else{
    <h2>NO OPERATIONS TO DISPLAY</h2>
  }


 
}
