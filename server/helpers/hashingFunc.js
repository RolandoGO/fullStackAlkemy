const bcrypt = require("bcrypt")

async function hash_salt(user_data){

    // function for hasing the password before safe in it in the database
    
    const salt = bcrypt.genSaltSync(10)
    const hash_password = await bcrypt.hash(user_data.password, salt)


    const data = {
        hash_password:hash_password,
        email:user_data.email
    }

    return data

}

module.exports = hash_salt
