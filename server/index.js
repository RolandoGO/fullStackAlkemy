const express = require("express")
const cors = require("cors")
const db = require("./mysqlConfig")
require("dotenv").config()

//importing routes
const registerRouter = require("./routes/register")
const logInRouter = require("./routes/login")
const operationsRouter = require("./routes/operationsRouter")

//importing middlewares for error and auth 
const authenticateToken = require("./auth_middlewares/authenticateToken")
const email_password_validation = require("./auth_middlewares/email_password_auth")
const errorHandler = require("./midelwares/errorHandler")

//initialitation

const app = express()

//port

const port = process.env.PORT || 3030;


//setings
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

//conecting to the database

db.connect((err)=>{

    if(err)throw err
    console.log("Database conected")

})

//defining routes

app.use("/register", email_password_validation, registerRouter)
app.use("/login", email_password_validation, logInRouter)
app.use("/operations", authenticateToken, operationsRouter)

//defining route for wrong url
app.use((req,res,next)=>{

    const err = new Error("Page Not Found")
    err.status = 404

    next(err)
    
})

//global error handler, it takes any errors that are previously catch, define and pass throug the next()
app.use(errorHandler)



//server run

app.listen(port, ()=>console.log(`server running in port ${port }`))
