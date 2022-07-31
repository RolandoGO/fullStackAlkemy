

export default function validationForm(data){

    const {email, password} = data
    const validationObj = {}


    
    
    
        if(email.length <= 255 && password.length <= 200){
    
            const regexEmail = /^([\w\d\.\-_]+)@([\w\d\-_]+)\.[\w]{2,8}(\.[\w]{2,8})?$/
            const regexPassword = /[\w\d]{2,15}/
    
            if(regexEmail.test(email) && regexPassword.test(password)) {
                
                validationObj.data = data
                validationObj.status = true
            
            }
            
            else {
                validationObj.message = "wrong email or password, see the rules for each"
                validationObj.status = false

                
    
            }
    
        }
    
        else{
            validationObj.message = "email or password to long"
            validationObj.status = false
            
        }
    
       
       
        
        
        
       

       return validationObj

}