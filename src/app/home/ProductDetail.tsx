'use client'
import Image from "next/image";
import { useState } from "react";
import { useSingleProductData } from "@/src/hooks/useProductsData";
import { useCartState } from "@/src/stores/cartStore";
import { toast } from "react-toastify";



type ProductDetailProp = {
    id : string
}

 const ProductDetailItem = ({id}: ProductDetailProp) => {
    const product = useSingleProductData(id)
    const setProduct = useCartState(state => state.setProduct)
    const [count, setCount] = useState(1)
   
    
    if(!product) return <div>Product not found</div>

     const addToCart = () => {
        setCount(count => count + 1)
        const productCart = {
            id : product.id,
            name : product.title,
            image : product.image,
            price : product.price,
            count : count,
            amount : product.price * count,
        }
        
        setProduct(id, productCart)
        toast.success('Added to cart!')
    }
  return (
     <div className="flex flex-col pb-6 justify-center items-center border m-4 p-8
                    sm: max-w-3/6">
            <Image src={product.image}
                  alt={`${product.title}`}
                  width={200}
                  height={200}>

            </Image>
            <span className="mt-4 p-2 text-lg font-extrabold text-center">
               {product.title}
            </span>
            <p className="m-2 p-2">
                {product.description}
            </p>
            <div className="flex flex-wrap justify-between items-center h-auto mx-1" >
                
                <div className="min-w-3/5 flex justify-end items-end">
                    <div className="mx-4 font-bold text-2xl">
                      $ {product.price}
                    </div>
                    <button className="bg-black text-white rounded text-sm font-bold px-4 py-2" onClick={addToCart}>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
  )
}
export default ProductDetailItem