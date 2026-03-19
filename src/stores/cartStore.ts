import {create} from "zustand";
import { persist } from "zustand/middleware";
import { CartProduct } from "../interfaces/intefaces";


type CartStateType = {
    products : CartProduct[]
    totalCartAmount : number
    
    setProduct : (id: string, product : CartProduct ) => void
    removeProduct : (id: string) => void
    
}

export const useCartState = create<CartStateType>()(
    persist((set) => {
   return ({
        products : [],
        totalCartAmount : 0,

        setProduct: (id, product) => {
          
            set((state) => {
                let newProducts : CartProduct[];
                let exist = state.products.some(product => product.id == id)
                if (!exist) {
                 newProducts = [...state.products, product] ;
                console.log('Producto anandido')
                
            } else {
                 newProducts = state.products.map(p => p.id == id ? {
                        ...p, count: p.count + 1,
                              amount: p.amount + p.price
                    }
                        : { ...p }
                    )
                };

                const totalCartAmount = newProducts.reduce((acc, product) => acc + product.amount, 0)
                
                 return {products : newProducts, totalCartAmount}
            })
        },
        removeProduct: (id) => {
            set((state) => {
                let newProducts : CartProduct[]
                newProducts = state.products.map(p => p.id == id ? {
                    ...p, count : p.count - 1,
                        amount : p.amount - p.price
                } : {...p})
                
                const totalCartAmount = newProducts.reduce((acc , product) => acc + product.amount, 0 )
                return {products : newProducts , totalCartAmount}
            })
             
        }
        
    })}, {
        name : 'cartState'
    }))