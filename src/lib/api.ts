

export const login =async ( username:string, password:string) => {
    const res = await fetch('https://fakestoreapi.com/auth/login', {
        method : "POST" ,
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({ username, password})
    })
    
    return  res.json()

}