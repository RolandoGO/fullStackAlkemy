import React, { useEffect, useState} from 'react'
import {useNavigate} from "react-router-dom"
import RegisterLoginForm from '../register_login_form/register_login_form'
import registerService from "../../services/registerService"
import "./register.css"


export default function Register() {

  const navigate = useNavigate()

  const [formData, setFormData] = useState()
  const [successMsj, setSuccessMsj] = useState(false)
  const [error, setError] = useState()
  const [spiner, setSpiner] = useState(false)

  //THE DATA RETURN FROM THE FORM CHILD IS VALIDATED, SO IF THE FOMRDATA STATE IS POPULATED IT MAKES THE REGISTER CALL
  useEffect(()=>{

    if(formData)handleRegister()
    
  },[formData])
  
//FUNCTION TO MAKE CALL TO THE REGISTER ENDPOINT, AND MANNAGE THE ERRORS OR SUCCESS MESSAGES
  async function handleRegister(){

    
    
    
    const call = await registerService(formData)

    call.error? setError(call.error) : setSuccessMsj(true)
    
    setFormData()
    setSpiner(false)
  }
    
  


  //passing props to the child component that conteins the basic from share bettween register and login component.
  const props = {
    setFormData,
    spiner,
    setSpiner,
    setError,
    error, 
    setSuccessMsj
  }

  const userCreatedMsj = (successMsj? "USER CREATED!!":null)
  const errorMsj = error? error:null
  return (
    <div className='registerGlobalContainer'>

      <div className='registerContainer'>

      <h2>Register form</h2>



      <RegisterLoginForm values={props}/>


      <h2 className='successMsj'>{userCreatedMsj}</h2>
      <button onClick={()=>navigate("/login")}>GO TO LOGIN</button>


      </div>
    </div>
    
  )
}
