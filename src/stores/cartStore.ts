import {create} from "zustand";
import { CartProduct } from "../interfaces/intefaces";

type CartStateType = {
    products : CartProduct[]
    totalCartAmount : number
    
    setProduct : (id: string, product : CartProduct ) => void
    
}


export const useCartState = create<CartStateType>((set) => {
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
                console.log(exist);
            } else {
                 newProducts = state.products.map(p => p.id == id ? {
                        ...p, count: p.count + 1,
                              amount: p.amount + p.price
                    }
                        : { ...p }
                    )
                };

                const totalCartAmount = newProducts.reduce((acc, product) => acc + product.amount, 0)
                console.log('newProducts:', newProducts);
                console.log('totalCartAmount:', totalCartAmount);
                 return {products : newProducts, totalCartAmount}
            })
           
        }
        
    })
})