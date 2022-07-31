import React, {useState } from 'react'
import OperationTable from "./OperationTable"
import Skeleton from '../../utils/Skeleton'

import { UseGetOperations } from './UseGetOperations'
import CrudHandlers from './CrudHandlers'

import { totalBalance } from '../../utils/OperationsFunc'
import CreationModal from '../../utils/CreationModal'

import "./operation.css"
import Logout from '../logOutComponent'



export default function UserOperations() {
    
    
    
    
    const [loading, setLoading]=useState(false)
    
    const [showModal, setShowModal] = useState(false)
    const [modalData, setModalData] = useState()

    const [creationModal, setCreationModal] = useState(false)

    const {error, email,userData} = UseGetOperations(loading)

    const {handleUserDeleteOperation, handleUserEditOperation, handleUserCreateOperation} =CrudHandlers(setLoading)
    

    
    

    function modalFunctionDisplay(operation){

    setShowModal(prev=>!prev)
    setModalData(operation)
    }

    function handleDelete(data){
        
        setShowModal(prev=>!prev)
        setLoading(true)
        handleUserDeleteOperation(data.operation_id)
        
    }

    function handleEdit(data){
        setShowModal(prev=>!prev)
        
        setLoading(true)
        handleUserEditOperation(data)

    }

    function handleCreate(data){
        setCreationModal(prev=>!prev)
        setLoading(true)
        handleUserCreateOperation(data)
        

    }

    
    const childProps ={
        userData, handleDelete, handleEdit, 
        showModal, setShowModal, 
        modalFunctionDisplay, modalData

    }

    const balance = (userData.length>0)?totalBalance(userData):0;
    const user = email? email:null
    const renderComponent = loading? <Skeleton/> : <OperationTable props={childProps}/>
        
  return (

    <div className='operationContainer'>
        <Logout></Logout>
        <div>
            <h1>Operations of: <p>{user}</p></h1>

            <h2 className='errorMsj'>{error}</h2>

        </div>

        <div>

            <div>
                <h2>BALANCE: {balance}</h2>
            </div>
            <button onClick={()=>setCreationModal(prev=>!prev)}>Create Operation</button>

            <CreationModal creationModal={creationModal} setCreationModal={setCreationModal} handleCreate={handleCreate}></CreationModal>

            <div className='operationTableContainer'>

                
                {renderComponent}
              
               

            </div>
        </div>

        

    </div>
    
  )
}
