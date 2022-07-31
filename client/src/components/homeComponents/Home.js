import React from 'react'
import {useNavigate} from "react-router-dom"
import "./home.css"

export default function Home() {
  const navigate = useNavigate()

  

  return (
    <div className='homeGlobalContainer'>
      <div className='homeContainer'>
      <h2>Home page</h2>
        <div className='homeText'>
        
        <h4>User Wallwet for making deposits and use them</h4>
        </div>

        <div className='loginLink'>
          <button onClick={()=>navigate("/login")}>Go to Login page</button>
        </div>

        <div className='registerLink'>
          <button onClick={()=>navigate("/register")}>Go to Register page</button>
        </div>

      </div>

      
    </div>
  )
}
