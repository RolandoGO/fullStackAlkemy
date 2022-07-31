const jwt = require("jsonwebtoken")
require("dotenv").config()


// function that takes the token in the headers of the request that the user has, and decode if it is the same token that was created in the login 

function authenticateToken(req,res,next){

    const token = req.headers["authorization"]
    const tokenChek = token? token.split(" ")[1] : undefined

    
    if(!tokenChek){
        const err = new Error("token not found")
        err.status = 401

        next(err)
    }

    else {
        
        jwt.verify(tokenChek, process.env.SECRETE_TOKEN_KEY, (err, user)=>{

            if(err){

                const err = new Error("invalid token")
                err.status = 403

                next(err)

            }

            else{

                req.user = user
                next()

            }

        })
    }
    
    

}

module.exports = authenticateToken