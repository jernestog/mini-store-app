"use client"
import Link from "next/link"
import { Title } from "@/src/components/Title"
import DashboardTableItem from "./DashboardTableItem"
import { useProductsData } from "@/src/hooks/useProductsData"
import Spinner from "@/src/components/Spinner"

export const DashboardTable = () => {
    const products = useProductsData()

  
    if (!products) return <div className="flex flex-col place-self-center"><Spinner/></div>
  return (
     <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between">
      <Title text="Products Dashboard"/ >

        
        <button className="bg-black text-white text-sm rounded font-bold px-6 py-2">
          <Link href={"/create-product"}>
         
            <span className="ml-2">
              New Product
            </span>
            </Link>
        </button>
        
      </div>

      <table className="border my-4" >
        <thead className="bg-black">
            <tr>
              <th className="text-white text-sm">ID</th>
              <th className="text-white text-sm" >Title</th>
              <th className="text-white text-sm">Price</th>
              <th className="text-white text-sm">Category</th>
              <th className="text-white text-sm">Count</th>
              <th className="text-white text-sm">Actions</th>
            </tr>
        </thead>
        <tbody>
        {
          products.map(product => (
            <DashboardTableItem key={product.id}
                                product={product}/>
          ))
        }
        </tbody>
      </table>
    </section>
  )
}

