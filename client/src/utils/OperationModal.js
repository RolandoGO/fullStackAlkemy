import React, {useState} from 'react'
import {Button, Modal, ModalBody, ModalFooter, ModalHeader, Form} from "react-bootstrap"

export default function OperationModal({data,showModal,setShowModal, handleDelete, handleEdit}) {


  const [newAmount, setNewAmount] = useState("")
  const [newConcept, setNewConcept] = useState("")

  function handleModalInfo(){


    const dataForEdit ={
      ...data,
      amount: newAmount,
      operation_concept : newConcept,

    }

    handleEdit(dataForEdit)

  }

  

  return (

    <div>
        <Modal show={showModal} onHide={()=>setShowModal(prevState=>!prevState)}>
            <ModalHeader closeButton></ModalHeader>
            <ModalBody>

                <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control type="text" value={newAmount} onChange={(e)=>setNewAmount(e.target.value)} autoFocus/>
                  </Form.Group>
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

            <Button  className='btn-danger' onClick={()=>handleDelete(data)} >delete</Button>
                
                <Button className='btn-primary' onClick={()=>handleModalInfo()} >edit</Button>
            </ModalFooter>
        </Modal>
    </div>
    
  )
}
