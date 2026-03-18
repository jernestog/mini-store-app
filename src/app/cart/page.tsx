'use client'
import { useCartState } from "@/src/stores/cartStore";
import { Title } from "@/src/components/Title";
import CartProductItem from "./CartProductItem.";


 const Cart = () => {
  const productsCart = useCartState(state => state.products)
  const totalCartAmount = useCartState(state => state.totalCartAmount)
  
 
  return (
    <div>
    <Title text="My Cart"/>
    <div>
      {

        productsCart.map(productCart => (
            <CartProductItem key={productCart.id} productCart={productCart}/>
        ))
      }

    </div>
    <div className="flex justify-between items center p-4">
      <Title text='Total cart'/>
      <span className="text-2xl font-bold"> $ {totalCartAmount.toFixed(2)}</span>
    </div>
    </div>
  )
}
export default Cart
