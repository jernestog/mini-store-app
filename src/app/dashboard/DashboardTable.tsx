"use client"
import Link from "next/link"
import { Title } from "@/src/components/Title"
import DashboardTableItem from "./DashboardTableItem"
import { useProductsData } from "@/src/hooks/useProductsData"

export const DashboardTable = () => {
    const products = useProductsData()

    if (!products) return <>Error : Load Products</>
  return (
    <div>
      <div className="flex items-end justify-between">
      <Title text="Products Dashboard"/ >

      <Link href={"/create-product"}>
      <button className="bg-black text-white text-sm rounded font-bold flex px-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><title>Add-ad SVG Icon</title><path fill="#ffffff" d="M18 20v-3h-3v-2h3v-3h2v3h3v2h-3v3zM3 21q-.825 0-1.412-.587T1 19V5q0-.825.588-1.412T3 3h14q.825 0 1.413.588T19 5v5h-2V8H3v11h13v2z"/></svg>
          <span className="ml-2">
            New Product
          </span>
      </button>
      </Link>
      </div>
      <table className="border">
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
    </div>
  )
}

