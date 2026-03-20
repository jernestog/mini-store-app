"use client"
import { useState } from "react";
import { ProductsListItem } from "./ProductsListItem";
import { Title } from "@/src/components/Title";
import { Product } from "@/src/interfaces/intefaces";

type ProducsListProp = {
    products : Product[]
}
export const ProductsList = ({products} : ProducsListProp) => {
    
    const productsPerPage = 6;
    const [page, setPage] = useState(1)

   

    const startPagination = (page - 1) * productsPerPage
    const endPagination = startPagination + productsPerPage

    const productsPagination = products.slice(startPagination, endPagination)
    

    return (
        <section className="w-full flex flex-col my-8 p-2 ">
            <Title text='Products list'/>
            <ul className="w-full h-auto flex flex-wrap justify-center">
                {
                    productsPagination.map(product => (
                       < ProductsListItem key={product.id} product={product} />
                    )
                    )
                }
            </ul>

            <div className="w-full flex justify-around my-8">
                <button className="bg-black text-white rounded py-2 px-4"
                disabled={page == 1}
                onClick={()=> setPage(page => page - 1)}>Anterior</button>
                <button className="bg-black text-white rounded py-2 px-4"
                disabled={endPagination >= products.length}
                onClick={()=> setPage(page => page + 1)}>Siguiente</button>
            </div>
        </section>
    )
}