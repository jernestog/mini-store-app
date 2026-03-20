import { CartProduct } from "@/src/interfaces/intefaces"

type OrderListItem = {
   order : {
    client : string,
    products : CartProduct[]
   }
}

export const OrdersListItem = ({order } : OrderListItem) => {
    const {client , products} = order
  return (
    <div className="border m-2">
        <span>Client :<strong> {client}</strong> </span>
        <div className="bg-zinc-300 p-4">
          
            <ul>
                {
                    products.map( product => (
                        <li key={product.id}>Count: { product.count} -  Product : {product.name} - Price : $ {product.price} - SubTotal : $ {product.amount} </li>
                    ))
                }
            </ul>
        </div>

    </div>
  )
}

