import React, {useState, useEffect} from 'react'
import {useNavigate} from "react-router-dom"
import RegisterLoginForm from '../register_login_form/register_login_form'
import loginService from "../../services/loginService"
import "./login.css"


export default function Login() {

  //using the hook navigate for redierect the user we¿hen the login is successfull
  const navigate = useNavigate()

  const [formData, setFormData] = useState()
  const [spiner, setSpiner] =useState(false)
  const [successMsj, setSuccessMsj] = useState(false)
  const [error, setError] = useState()

  //THE DATA RETURN FROM THE FORM CHILD IS VALIDATED, SO IF THE FOMRDATA STATE IS POPULATED IT MAKES THE REGISTER CALL
  useEffect(()=>{

    if(formData)handleLogin()
    
    
  },[formData])
  
//FUNCTION TO MAKE CALL TO THE LOGIN ENDPOINT, AND MANNAGE THE ERRORS OR SAVE TOKEN IN SESSIONSTORGAE
  async function handleLogin(){

    
      try{

        const call = await loginService(formData)
        setSpiner(false)
        
        if(!call.error){
        
        sessionStorage.setItem("token", call.payload.data.acces_token)
        navigate("/userOperations")

        }

        else{
          setError(call.error)

        }

      }

      catch(error){
        alert("server not working")
      }
      
    
  }
    
  


  //passing props to the child component that conteins the basic from share bettween register and login component.
  const props = {
    setFormData,
    setSpiner, 
    spiner, 
    setError, 
    error, 
    setSuccessMsj
  }
  const errorMsj = error? error:null

  return (
    <div className='loginGlobalContainer'>

    <div className='loginContainer'>

    <h2>Login form</h2>



    <RegisterLoginForm values={props}/>
    <button onClick={()=>navigate("/register")}>GO TO REGISTER</button>


    </div>

    </div>
  )
  
  
}
