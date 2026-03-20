"use client"
import { useEffect, useState } from "react";
import { fecthData } from "../lib/fecthData";
import { Order } from "../interfaces/intefaces";

export const useOrdersData = () => {
    const [ orders, setOrders ] = useState<Order[]>()

    useEffect(() => {
        fecthData('/api/order').then(setOrders)
    }, [])
    
    return orders;
}


