import axios from "axios"
import { registerUrl } from "../apis"

export default async function registerService(data){
    
    const responseObj ={}

    try{
        const call = await axios.post(registerUrl,data)

        responseObj.error =false
        responseObj.payload = call

    }

    catch(err){
        
        if(err.response.data.message) responseObj.error = err.response.data.message
        else responseObj.error = "server not working"
    }

    
    
    return responseObj

}