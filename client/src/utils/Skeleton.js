import React from 'react'

export default function Skeleton() {


    const Skeletonstyle ={

        with:"100%",
        height:"100%",
        backgroundColor:"#ddd",
        display:"flex",
        justifyContent:"center",
        
    }

    const spinnerConteiner ={
        height:"100px",
        with:"100px"
        
    }
  return (
    <div style={Skeletonstyle}>
        <div style={spinnerConteiner}>
            <div className="spinner-border" role="status">
            
            </div>
        </div>
    </div>
  )
}
