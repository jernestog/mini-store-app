"use client"
import { useEffect, useState } from "react";
import { fecthData } from "../lib/fecthData";

import { Product } from "../interfaces/intefaces";

export const useProductsData = () => {
    const [ products, setProducts ] = useState<Product[]>()

    useEffect(() => {
        fecthData('https://fakestoreapi.com/products').then(setProducts)
    }, [])
    return products;
    
}
export const useSingleProductData = (id: string) => {
    const [ product, setProduct ] = useState<Product>()

    useEffect(() => {
        fecthData(`https://fakestoreapi.com/products/${id}`).then(setProduct)
    }, [])
    return product;
    
}

