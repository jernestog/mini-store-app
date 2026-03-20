export interface Product {
    id : string
    title : string
    price : number
    description : string
    category : string
    image : string
    rating : {
        rate : number
        count : number
    }

}

export interface CartProduct {
    id: string
    name : string
    price : number
    image : string
    amount : number
    count: number
}

export interface User  {
    id : string
    name : string
    username : string
    password : string
    role : string
    
}