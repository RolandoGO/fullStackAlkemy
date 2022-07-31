import axios from "axios"
import { loginUrl } from "../apis"

export default async function loginService(data){
    
    const responseObj ={}

    

    try{
        const call = await axios.post(loginUrl,data)

        responseObj.error =false
        responseObj.payload = call

    }

    catch(err){
        

        responseObj.error = err.response.data.message
    }

    return responseObj


}