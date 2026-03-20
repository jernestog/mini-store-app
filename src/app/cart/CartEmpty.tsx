import Link from "next/link"
import Image from "next/image"
import { Button } from "@/src/components/Button"

export const CartEmpty = () => {
  return (
    <div className="flex flex-col place-self-center">
        <Image src={"/resourses/images/cart-img.webp"}
                alt="cart-img"
                width={300}
                height={400} >
        </Image>
        <div className="flex flex-col items-center">
         <span className="text-xl">Cart empty</span> 
         <Link href={'/'}>
         <Button text="Start  to buy!"/ >
        </Link>
        </div>
    </div>
  )
}

