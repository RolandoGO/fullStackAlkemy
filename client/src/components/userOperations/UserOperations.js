import React, {useState } from 'react'
import OperationTable from "./OperationTable"
import Skeleton from '../../utils/Skeleton'

import { UseGetOperations } from './UseGetOperations'
import CrudHandlers from './CrudHandlers'

import { totalBalance } from '../../utils/OperationsFunc'
import CreationModal from '../../utils/CreationModal'

import "./operation.css"
import Logout from '../logOutComponent'


//COMPONENT THAT DISPLAYS THE LOGOUT COMPONENT BTN, THE BALANCE AND USER EMAIL STATE AND THE OPERATIONS TABLE COMPONENT 
export default function UserOperations() {
    
    
    
    //THE LOADING STATE IS WHATS CHANGE WHIT THE CRUD OPERATIONS AND ALLOWS THE RERENDER WHIT THE CHANGES MADE
    const [loading, setLoading]=useState(false)
    
    const [showModal, setShowModal] = useState(false)
    const [modalData, setModalData] = useState()

    const [creationModal, setCreationModal] = useState(false)

//HOOK FOR THE READ OF THE  DATA,  HAPPEN WHIT THE CHANGE OF THE LOADING STATE
    const {error, email,userData} = UseGetOperations(loading)


    //METHODS FOR THE EDITION, CREATION AND DELETION OF OPERATIONS
    const {handleUserDeleteOperation, handleUserEditOperation, handleUserCreateOperation} =CrudHandlers(setLoading)
    

    
    
//MODAL POP UP FUNCTION FOR EDITON AND DELETION, AND FOR CREATING THE STATE  WHIT THE DATA FOR IT IN MODAL DATA
    function modalFunctionDisplay(operation){

    setShowModal(prev=>!prev)
    setModalData(operation)
    }


//ALL THIS THREE FUNCTIONS  CLOSE THE MODAL, START THE LOADING AND TRIGGER THE FUNCTIONS FOR THE API CALLS THROUGH THE HANDLERS
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
//...................................
    
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
