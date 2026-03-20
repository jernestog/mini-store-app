import { User } from "../interfaces/intefaces"
import { Order } from "../interfaces/intefaces"

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

export const register = async (user : User) => {
    const res = await fetch('/api/auth/signup', {
        method : 'POST', 
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(user)
    })
     if(!res.ok){
        console.log('hi')
    }
    console.log('222')
    return await res.json()
}

export const saveOrder = async (order: Order) => {
    const res = await fetch('/api/order', {
        method : 'POST',
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(order)
    })
    if(!res.ok) {
        console.log('Error')
    }
    console.log(res)
    return await res.json()
}
