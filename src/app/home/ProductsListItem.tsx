"use client"
import Image from "next/image"
import Link from "next/link"
import { Product } from "@/src/interfaces/intefaces"
import { Button } from "@/src/components/Button"



type ProducListItemProp = {
    product : Product
}

export const ProductsListItem = ({product }: ProducListItemProp) => {
    
  return (
    <div className="w-50 h-auto flex flex-col items-center justify-between
             m-2 p-2 border border-black">
        <span className="text-black text-sm">
            {product.title}
        </span>
        <div className="w-32 aspect-square relative">
            <Image  src={product.image}
                    alt={`${product.title} image`}
                    fill
                    className="object-contain"
                 >
            </Image>
        </div>
        <div className="flex flex-col items-center justify-center">
            <span className="font-extrabold  text-2xl">
                $ {product.price}
            </span>

            <Link href={`/home/${product.id}`}>
                <Button text='Detalle'>
                    
                </Button>
            </Link>
        </div>

    </div>
  )
}

