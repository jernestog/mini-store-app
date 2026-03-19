import Link from "next/link"
import { Product } from "@/src/interfaces/intefaces"
import { DeleteProduct } from "@/src/lib/productsCRUD"

type DashboardTableItemProp = {
    product : Product
}

const DashboardTableItem = ({product} : DashboardTableItemProp) => {
    const {id, title, price, category, rating} = product

    const deleteProduct = () => {
        DeleteProduct(id)
    }
  return (
    <tr>
        <td className="text-sm">{id}</td>
        <td className="text-sm">{title}</td>
        <td className="text-sm">${price}</td>
        <td className="text-sm">{category}</td>
        <td className="text-sm">{rating.count}</td>
        <td>
            <button>
                <Link href={`update-product/${id}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-black" viewBox="0 0 256 256">
                    <path d="M224 128v80a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h80a8 8 0 0 1 0 16H48v160h160v-80a8 8 0 0 1 16 0m5.66-58.34l-96 96A8 8 0 0 1 128 168H96a8 8 0 0 1-8-8v-32a8 8 0 0 1 2.34-5.66l96-96a8 8 0 0 1 11.32 0l32 32a8 8 0 0 1 0 11.32m-17-5.66L192 43.31L179.31 56L200 76.69Z"/>
                    </svg>
                </Link>
            </button>
            <button onClick={deleteProduct}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-black" viewBox="0 0 24 24">
                    <path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z"/>
                </svg>
            </button>
        </td>
    </tr>
  )
}

export default DashboardTableItem