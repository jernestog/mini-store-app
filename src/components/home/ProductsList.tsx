"use client"
import { useProductsData } from "@/src/hooks/useProductsData";
import { ProductsListItem } from "./ProductsListItem";

export const ProductsList = () => {
    const products = useProductsData();

    if(!products) return <div>Error al cargar products</div>

    return (
        <section className="w-full flex flex-col my-8 p-2">
            <h2 className="text-black font-bold">Lista de Productos</h2>
            <ul className="w-full h-auto flex flex-wrap">
                {
                    products.map(product => (
                       < ProductsListItem key={product.id} product={product} />
                    )
                    )
                }
            </ul>
        </section>
    )
}