import axios from "axios"
import { userInfo } from "../apis"
import authRequestToken from "../auth/authRequestToken"

//function that returns an error if there is no token in the sessionStore or the response from the endpoint


export async function getUserOperations(){

    const token = authRequestToken()
    const reqObj ={}
    reqObj.headers = token
    const responseObj ={}
    
    try{

        const call = await axios.get(userInfo, reqObj)

        responseObj.error=false
        responseObj.payload = call
        return responseObj



    }

    catch(err){

        responseObj.error=true
        responseObj.message = err.response.data.message

        return responseObj

    }
        
}

export async function deleteUserOperation(id){

     
    const token = authRequestToken()

    const reqObj = {
        headers:token,
        data:{id}
    }
    
    try{
        const call = await axios.delete(userInfo, reqObj)
        return call
    }

    catch(error){
        alert("cant delete the operation")

    }

    


}


export async function editUserOperation({operation_id, operation_concept, amount}){

     
    const token = authRequestToken()

    const jwtHeader ={headers:token}

    const reqObj = {
        operation_id,
        operation_concept,
        amount
    }
    
    
    try{
        const call = await axios.put(userInfo,reqObj, jwtHeader)
        
       return call
    }

    catch(error){
        alert("cant edit operation")

    }
}



export async function createUserOperation({ operation_type, operation_concept, amount}){

     
    const token = authRequestToken()

    const jwtHeader = {headers:token}

    const reqObj = {
    
            operation_type,
            operation_concept,
            amount
        }
    
    
    try{
        const call = await axios.post(userInfo,reqObj, jwtHeader)
        
       return call
    }

    catch(error){
        alert("cant create operation")
        

    }
}