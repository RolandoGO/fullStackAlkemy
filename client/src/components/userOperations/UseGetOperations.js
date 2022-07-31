import  {useEffect, useState} from 'react'
import{ getUserOperations} from '../../services/operationService'

export const   UseGetOperations = (deleteLoading)=>{

    const [email, setEmail] = useState()
    const [userData,setUserData] = useState([])
    const [error,setError] = useState()


    useEffect(()=>{

        let stopApiCall = false

        if(!stopApiCall) handleUserOperations()
        
        

        //when the component is unmounted, aviod the api call switching the variable stopApiCall.
        return ()=> stopApiCall = true

    },[deleteLoading])


    async function handleUserOperations(){
        //clear anny errors msg
                setError()
        
                try{
                    
                    const call = await getUserOperations()
        
                     //catching errors from the backend
                    if(call.error){
                    
                        setError(call.message)
                    }
                   // setting the data of the user in the state
                    else{
                        setUserData(call.payload.data.data)
                        setEmail(call.payload.data.email)
                    }
        
                }
                //catch anny errors that are not from the backend
                catch(error){
                    alert("unespected error fetching the operations data")
        
                }
        
            }
        


    return {email,userData,error}
}

