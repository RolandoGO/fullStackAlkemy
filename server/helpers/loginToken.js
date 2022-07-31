const jwt = require("jsonwebtoken")
require("dotenv").config()

//funciton to create the token whit the user id and email and the secret string in the .env
//that token is send to the user for futures request auth.
function loginToken(user_data){

    const user = {
                                
        id:user_data.user_id,
        email:user_data.user_email
    }
    const token = jwt.sign(user, process.env.SECRETE_TOKEN_KEY)
    return token


}

module.exports = loginToken