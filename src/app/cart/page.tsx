'use client'
import Link from "next/link";
import { useCartState } from "@/src/stores/cartStore";
import { Title } from "@/src/components/Title";
import { Button } from "@/src/components/Button";
import CartProductItem from "./CartProductItem.";
import { saveOrder } from "@/src/lib/api";
import { useRouter } from "next/navigation";

import { useSessionState } from "@/src/stores/sessionStore";
import { toast } from "react-toastify";

 const Cart = () => {
  const router = useRouter()
  const productsCart = useCartState(state => state.products)
  const totalCartAmount = useCartState(state => state.totalCartAmount)
  const cleanCart = useCartState(state => state.clearCart)
  const sessionUser = useSessionState(state => state.user)



  const sendOrder = () => {
    if (sessionUser.username !== ''){
        saveOrder({
          client : sessionUser.name,
          products : productsCart
        })
        toast.success('Order sen. Thanks for buy!')
    }else {
        toast.info('Need Login to Buy')
        router.push('/login')
    }
        
  }

  if(totalCartAmount == 0) return <div className="flex flex-col"> <span>Cart empty</span> <Link href={'/'}><Button text="Start  to buy!" ></Button></Link></div>

  return (
    <div className="min-w-full">
      <Title text="My Cart"/>
      {
          sessionUser.username !== '' &&
          <div className="flex">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>User-avatar SVG Icon</title><path fill="#000000" d="M10 11c-5.92 0-8 3-8 5v3h16v-3c0-2-2.08-5-8-5"/><circle cx="10" cy="5.5" r="4.5" fill="#000000" /></svg>
            <span >Session started :<strong> { sessionUser.name }</strong></span>
          </div>
          }
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
        </button >
               
        <button onClick={sendOrder}>
             Buy !
        </button>
      </div>
    </div>
  )
}
export default Cart
