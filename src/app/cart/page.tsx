'use client'
import Link from "next/link";
import { useCartState } from "@/src/stores/cartStore";
import { Title } from "@/src/components/Title";
import { Button } from "@/src/components/Button";
import CartProductItem from "./CartProductItem.";


 const Cart = () => {
  const productsCart = useCartState(state => state.products)
  const totalCartAmount = useCartState(state => state.totalCartAmount)
  const cleanCart = useCartState(state => state.clearCart)

  if(totalCartAmount == 0) return <div className="flex flex-col"> <span>Cart empty</span> <Link href={'/'}><Button text="Start  to buy!" ></Button></Link></div>

  return (
    <div className="min-w-full">
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
        <button className="bg-black text-white text-sm rounded font-bold"
           onClick={cleanCart}>
          Clean Cart
        </button>
      </div>
    </div>
  )
}
export default Cart
