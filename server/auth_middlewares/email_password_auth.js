
//function for validating the password and email that comes in the req body from the front end.
//checks: 
//--if it exist a password and email propertie in the body object
//--if the length is greater than the database can hold
//--if it is an email and if the password is in range.

function email_password_validation(req,res,next){

    const data = req.body

    

   if(data.email && data.password){
    
    
    if(data.email.length <= 255 && data.password.length <= 200){

        const regexEmail = /^([\w\d\.\-_]+)@([\w\d\-_]+)\.[\w]{2,8}(\.[\w]{2,8})?$/
        const regexPassword = /[\w\d]{2,15}/

        if(regexEmail.test(data.email) && regexPassword.test(data.password)){
            
            next()
        }
        
        else {
            const err = new Error ("wrong email or password, see the rules for each")
            err.status = 400

            next(err)

        }

    }

    else{
        const err = new Error ("email or password to long")
        err.status = 400
        
        next(err)
    }

   }
   else{
    const err = new Error ("your request dosent have the email or password atributes")
    err.status = 400

    next(err)
    
    
   }
    

}

module.exports = email_password_validation