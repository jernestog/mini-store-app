

export const login = async ( username:string, password:string) => {
    const res = await fetch('https://fakestoreapi.com/auth/login', {
        method : "POST" ,
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({ username, password})
    })
    if(!res.ok){
        return res
    }
    return await res.json()

}

export const login2 = async ( username:string, password:string) => {
    const res = await fetch('/api/auth/login', {
        method : "POST" ,
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({ username, password})
    })
    if(!res.ok){
        console.log('hi')
    }
    console.log('222')
    return await res.json()

}

