

//function that makes the  authorization obj whit the token for the request to the end points

export default function requestToken(){

    const token = sessionStorage.getItem("token")

    

    return {"authorization": `Bearer ${token}`}

    

}