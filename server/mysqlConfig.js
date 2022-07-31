const mysql = require("mysql")
require("dotenv").config()


//object for connection whit the database using .env variables

const logData = {
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE
}


const db = mysql.createConnection(logData)

module.exports = db;