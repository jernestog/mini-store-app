import Image from "next/image"
import { CartProduct } from "@/src/interfaces/intefaces"
import { useCartState } from "@/src/stores/cartStore"

type CartProductProp = {
    productCart : CartProduct
}

const CartProductItem = ({productCart} : CartProductProp ) => {
   const { id, name, price, count, image, amount}=  productCart
    const setProduct = useCartState(state => state.setProduct)
    const removeProduct = useCartState(state => state.removeProduct)

    const removeProductCart = () => {
        removeProduct(id)
    }

    const addProduct = () => {
        setProduct(id, productCart)
    }
  return (
    (
    <div className="flex rounded-xl bg-zinc-300 w-full items-center justify-between my-2">
        <div className="max-w-12">
            <Image src={image}
                    alt={name}
                    width={50}
                    height={50}
                    className="object-contain"
            ></Image>
        </div>
        <div className="">
            <button className="bg-black text-sm font-bold text-white py-1 px-4"
                    disabled={count == 1}
                    onClick={removeProductCart}> - </button>
                <span className="text-sm font-bold">
                    {count}
                </span>
           <button className="bg-black text-sm font-bold text-white py-1 px-4"
                    onClick={addProduct}> + </button>
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