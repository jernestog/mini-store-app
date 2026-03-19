import { Product } from "../interfaces/intefaces"

export const createProduct = async (product: Product) => {
    const resp = await fetch('https://fakestoreapi.com/products', {
        method: "POST",
        headers : {
            "Content-Type" : "application/json"
        }, body : JSON.stringify(product)
    })

    console.log(await resp.json())
}

export const updateProduct = async (id: string, product: Product) => {
    const resp = await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: "PUT",
        headers : {
            "Content-Type" : "application/json"
        }, body : JSON.stringify(product)
    })

    console.log(await resp)
}



export const DeleteProduct = async (id: string) => {
    const resp = await fetch(`https://fakestoreapi.com/products/${id}`, {
     method: 'DELETE'
    })

    console.log(await resp.json())

}