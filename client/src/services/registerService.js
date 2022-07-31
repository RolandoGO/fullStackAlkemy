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

        responseObj.error = err.response.data.message
    }

    return responseObj


}