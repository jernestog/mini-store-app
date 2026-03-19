"use client"
import { useState, useEffect } from "react"
import { useProductsData } from "@/src/hooks/useProductsData"
import { updateProduct } from "@/src/lib/productsCRUD"
import { Product } from "@/src/interfaces/intefaces"
import { toast } from "react-toastify"

type UpdateProductFormProp = {
    id : string
}

const UpdateProductForm = ({id} : UpdateProductFormProp) => {
    const products = useProductsData() 

    const productUpdate = products?.find(product => product.id == id)
    
    const [newProduct, setNewProduct] =useState({
            id : "",
            title : "",
            price : 0,
            description : "",
            image : "",
            category : "",
            rating : {
                count : 0,
                rate : 0
            }
        })

    useEffect(()=> {
        if (productUpdate){
            setNewProduct(productUpdate)
        }
        
    },[productUpdate])

        const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
            e.preventDefault()
            updateProduct(id, newProduct)
            toast.success("Product update")
            setNewProduct({
            id : '',
            title :  '',
            price : 0,
            description : '',
            image : '',
            category : '',
            rating : {
                count : 0,
                rate : 0
            }})
            e.target.reset()
        }

        const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>  ) => { 
          const value = e.target.value
          const name = e.target.name
       
          setNewProduct(data => ({
            ...data,
            [name] : value
          }))
        }
    
  return (        
    
            
                <section className="min-h-full w-full flex items-center justify-center">
                <div>
                    <form action="#" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="title">Product title :</label>
                            <div className="p1 border rounded">
                            <input type="text"
                                    name="title"
                                    id="title"
                                    required
                                    value={newProduct.title}
                                    onChange={handleChange}
                                    
                                    />
                            </div>
                            
                        </div>
                        <div>
                            <label htmlFor="price">Price :</label>
                            <div className="p1 border rounded">
                            <input type="number"
                                    name="price"
                                    id="price"
                                    required
                                    value={newProduct.price} 
                                    onChange={handleChange}
                                    
                                    />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="description">Product description :</label>
                            <div className="p1 border rounded">
                            <textarea 
                                    name="description"
                                    id="description"
                                    required
                                    className="h-12"
                                    value={newProduct.description}
                                    onChange={handleChange}
                                    
                                    />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="category">Category:</label>
                            <div className="p1 border rounded">
                            <input type="text"
                                    name="category"
                                    id="category"
                                    required
                                    value={newProduct.category}
                                    onChange={handleChange}
                                    
                                    />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="image">Image (URL):</label>
                            <div className="p1 border rounded">
                            <input type="text"
                                    name="image"
                                    id="image"
                                    required
                                    value={newProduct.image}
                                    onChange={handleChange}
                                    />
                            </div>
                        </div>
                        <button type="submit" className="bg-black text-white rounded px-6 py-1">
                            Actualizar
                        </button>
                    </form>
                </div>
                </section>
      
    
    


  )
}

export default UpdateProductForm