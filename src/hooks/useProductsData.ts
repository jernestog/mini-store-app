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