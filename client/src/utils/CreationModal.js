import React, {useState} from 'react'
import {Button, Modal, ModalBody, ModalFooter, ModalHeader, Form} from "react-bootstrap"

export default function CreationModal({creationModal,setCreationModal ,handleCreate}) {


  const [newAmount, setNewAmount] = useState("")
  const [newConcept, setNewConcept] = useState("")
  const [newType, setNewType] = useState("")

  function handleModalInfo(){

    

    const dataForCreation ={
      operation_type : newType,
      amount: newAmount,
      operation_concept : newConcept,

    }

   handleCreate(dataForCreation)

  }

  

  return (

    <div>
        <Modal show={creationModal} onHide={()=>setCreationModal(prevState=>!prevState)}>
            <ModalHeader closeButton></ModalHeader>
            <ModalBody>

                <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control type="text" value={newAmount} onChange={(e)=>setNewAmount(e.target.value)} autoFocus/>
                  </Form.Group>
                  
                  <div style={{display:"flex", flexDirection:"column",justifyContent:"space-between" }} onChange={(e)=>setNewType(e.target.value)}>
                    <label htmlFor={"ingreso"}>Ingreso 
                    <input type={"radio"}  name={"type"} value ={"ingreso"} id={"ingreso"}></input>
                    </label>
                    
                    
                    <label htmlFor={"egreso"}>Egreso
                    <input type={"radio"}  name={"type"} value ={"egreso"} id={"egreso"}></input>
                    </label>
                    
                  </div>

                  

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Concept</Form.Label>
                    <Form.Control type="text" value={newConcept} onChange={(e)=>setNewConcept(e.target.value)}/>
                  </Form.Group>
              </Form>
                
               
            </ModalBody>
            <ModalFooter>

            
                
                <Button className='btn-primary' onClick={()=>handleModalInfo()} >create</Button>
            </ModalFooter>
        </Modal>
    </div>
    
  )
}
