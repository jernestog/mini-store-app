"use client"
import { useState } from "react"
import { Product } from "@/src/interfaces/intefaces"
import { createProduct } from "@/src/lib/productsCRUD"


export const Page = () => {
    const [newProduct, setNewProduct] =useState<Product>({
        id : crypto.randomUUID(),
        title :  '',
        price : 0,
        description : '',
        image : '',
        category : '',
        rating : {
            count : 0,
            rate : 0
        }
    })

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        createProduct(newProduct)
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
                                onChange={handleChange}
                                />
                        </div>
                    </div>
                    <button type="submit" className="bg-black text-white rounded px-6 py-1">
                        Agregar
                    </button>
                </form>
            </div>
            </section>
  )
}
export default Page

