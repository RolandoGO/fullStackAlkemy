import { deleteUserOperation, editUserOperation, createUserOperation } from "../../services/operationService"

export default function CrudHandlers(setLoading) {


    async function handleUserDeleteOperation(id){

        
        const call = await deleteUserOperation(id)
       
        setLoading(false)
      
        if(call.error){
            alert(call.error.message)
        }
        
      
    }






    async function handleUserEditOperation(data){

        
        const call = await editUserOperation(data)
       
        setLoading(false)
      
        if(call.error){
            alert(call.error.message)
        }
        
      
    }



    async function handleUserCreateOperation(data){

        
        
        const call = await createUserOperation(data)
       
        setLoading(false)
      
        if(call.error){
            alert(call.error.message)
        }
        
      
    }


     

      return {
        handleUserDeleteOperation,
        handleUserEditOperation,
        handleUserCreateOperation
      }

  
}



