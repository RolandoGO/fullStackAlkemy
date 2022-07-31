import React from 'react'
import {useNavigate} from "react-router-dom"


export default function Logout() {
    const navigate = useNavigate()
    function handleLogOut(){

        sessionStorage.clear()
        navigate("/login")
    }
    
  return (
    <div>
        <button className='btn btn-dark' onClick={()=>handleLogOut()}>LOG OUT</button>
    </div>
  )
}
