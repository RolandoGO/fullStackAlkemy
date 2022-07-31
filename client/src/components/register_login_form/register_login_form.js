import React, {useState}from 'react'
import validationForm from '../../auth/validationFunc'

import "./register_login_form.css"


export default function RegisterLoginForm({values}) {

  const [email,setEmail] = useState("")
  const [password, setPassword] = useState("")

  const {setFormData,setSpiner, spiner, setError, error, setSuccessMsj} = values

  function handleSubmit(e){

    setError()
    setSuccessMsj(false)
    e.preventDefault()

    const userData ={
      email,
      password
    }
     
    //use validate function to know if tha form data passed is valid acording to the rules in the backend
    const userValidation = validationForm(userData)

    if(userValidation.status){
      setSpiner(true)
      setFormData(userValidation.data)
    }
    
    else setError(userValidation.message)
}

const errorMsj = (error? error:null)

  

  return (

    <div className='formContainer'>


      <form className='emailPasswordForm' onSubmit={(e)=>handleSubmit(e)}>

      <div >
      <label htmlFor='email'>Email</label>
      <br></br>
      <input id="email" type={"email"} placeholder={"eje: rolando_go@gmail.com"} 
      onChange={(e)=>setEmail(e.target.value)} ></input>
      <br></br>
      <label htmlFor='email'>letters , numbers, -, and _  only.</label>
      </div>

      <div >
        <label htmlFor="password">Password</label>
        <br></br>
      <input id='password' type={"password"} onChange={(e)=>setPassword(e.target.value)} ></input>
      </div>
      <label htmlFor='password'>numbers and letters only, more than 2 and less than 15.</label>

      {spiner?<div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div>
       :<button>Send</button>}

      </form>

      <h3 className='errorMsj'>{errorMsj}</h3>

    </div>
    
    
  )
}
