const db = require("../../mysqlConfig")


const operationsControler = {


    //query all the user operations acording to his id

    getOperations:(req,res, next)=>{
    
        
        
        db.query("SELECT * FROM users_operations WHERE user_id = ? ORDER BY operation_date DESC",[req.user.id] ,
        (err,result)=>{
    
            if(err){
                const err = new Error("error lookin for user data")
                err.status = 500
    
                next(err)
            }
    
            else{
                const userData ={
                    email:req.user.email,
                    data: result

                }
                res.send(userData)
            }
    
        })
    
    },

    //create an operation

    createOperation:(req,res,next)=>{

        const {amount,operation_type,operation_concept} = req.body
        const user_id = req.user.id
    
        db.query("INSERT INTO users_operations(user_id,amount,operation_type,operation_concept) VALUES (?,?,?,?)",
        [user_id,amount,operation_type,operation_concept],
        (err,result)=>{
            if(err){
                const err = new Error("error creating new user info")
                err.status = 500
                next(err)
            }
            else{
                
                res.json({message:"infromation uploaded"})
            }
        })
    
    },

    // UPDATE OPERATION, ONLY AMOUNT AND CONCEPT

    updateOperation:(req,res,next)=>{


        
        const {operation_id, amount,operation_concept} = req.body
    
    
        db.query("UPDATE users_operations SET amount = ?, operation_concept=? WHERE operation_id = ?", 
        [amount,operation_concept,operation_id],
        (error, result)=>{
            if(error){
    
                
                const err = new Error("invalid information for update")
                err.status = 400
                next(err)
            }
    
            else{
    
                res.json({message:"user info updated!"})
            }
        })
    
    },

    //method for deleting an operation acordin to his id

    deleteOperation:(req,res,next)=>{

        const {id} = req.body
        
        
    
        db.query("DELETE FROM users_operations WHERE operation_id = ?",[id],
        (err,result)=>{
            if(err){
                const err = new Error("info could not be deleted")
                err.status = 500
                next(err)
            }
            else{
                res.send("operation was deleted")
            }
        })
    
    
    }



}


module.exports = operationsControler