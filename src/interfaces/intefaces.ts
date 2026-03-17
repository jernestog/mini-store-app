export interface Product {
    id : string
    title : string
    price : number
    description : string
    category : string
    image : string
    rating : {
        rate : string
        count : number
    }

}