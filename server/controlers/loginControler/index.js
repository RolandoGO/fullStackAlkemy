const db = require("../../mysqlConfig")
const bcrypt = require("bcrypt")
const loginToken = require("../../helpers/loginToken")

const loginControler ={

    isUserRegister: (req,res,next)=>{

        const data = req.body

        //query the database to know if there is a user whit that email

        db.query(`SELECT * FROM users WHERE user_email = ?`,[data.email],
        (err, result)=>{
            if(err){
                const err = new Error("problems whit the database")
                err.status = 500
                next(err)
            }
            else{
        
        //if retunrs an empty array there is no user whit that email

                if(result.length === 0) {
                            const err = new Error ("user not register")
                            err.status = 400
                            next(err)
                }
                
                else {
                    //if the arrays comes populated (always whit one object) the password is check
                    const storeUser = result[0]
                    bcrypt.compare(data.password, storeUser.user_hash).then(response=>{

                        //if the password is correct, the token created whit the loginToken function is send

                        if(response){

                            const token = loginToken(storeUser)
                            res.json({acces_token:token})
                            
                        }
                        else{ 
                            //if not, wrong password was enter
                            
                            const err = new Error ("incorrect password! try again")
                            err.status = 400
                            next(err)
                        }
                    })
                    
                }
            }
        })

    }

}

module.exports = loginControler