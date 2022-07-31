const db = require("../../mysqlConfig")
const hash_salt = require("../../helpers/hashingFunc")

const registerControler = {



    userRegister: async (req,res,next)=>{
        
        const data = req.body
       
        

        //hashing and salting the password con bcrypt before save in it in the database
        const hash_data = await hash_salt(data)
       
        

        db.query("INSERT INTO users(user_email, user_hash) VALUES (?,?)", [hash_data.email, hash_data.hash_password], 
        (error,result)=>{

        if(error) {
            
            const err = new Error("email already exist!")
            err.status = 400

            next(err)

        }
        else {
            res.send(`user created!!`)

        }
    })

    }
}

module.exports = registerControler