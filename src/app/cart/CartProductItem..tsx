import Image from "next/image"
import { CartProduct } from "@/src/interfaces/intefaces"

type CartProductProp = {
    productCart : CartProduct
}

const CartProductItem = ({productCart} : CartProductProp ) => {
   const { name, price, count, image, amount}=  productCart
  return (
    (
    <div className="flex rounded-xl bg-zinc-300 w-full items-center justify-between my-2">
        <span>
            {count}
        </span>

        <div className="max-w-12">
            <Image src={image}
                    alt={name}
                    width={50}
                    height={50}
                    className="object-contain"
            ></Image>
        </div>
        <div className="flex justify-between w-70">
            <span className="text-sm">{name}</span>
            <span className="font-bold">${amount.toFixed(2)}</span>
        </div>
    </div>
  )
  )
}

export default CartProductItem