'use client'
import { useState } from "react";
import { useProductsData } from "../hooks/useProductsData";
import { Hero } from "./home/Hero";
import { ProductsList } from "./home/ProductsList";
import { SearchForm } from "./home/SearchForm";
import { Product } from "../interfaces/intefaces";
import Spinner from "../components/Spinner";



export default function Home() {
    const [filter, setFilter] = useState({name : '', category : '', orderName: '', orderPrice:''});
    const [productsFiltered, setProductsFiltered] = useState<Product[]>([]) 
    const products = useProductsData()

     if(!products) return <div className="flex flex-col place-self-center"><Spinner/> Loading</div>
     
    const productsList = productsFiltered.length > 0 ? productsFiltered : products

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-100 font-sans text-black">
     
      <main className="flex min-h-screen w-full sm:w-3/5  flex-col bg-zinc-100 
                        items-start  pb-2  sm:items-center">
       <Hero/>
       <SearchForm filter={filter} setFilter={setFilter} products={products} setProductsFiltered={setProductsFiltered}/>
       <ProductsList products={productsList}/>
      </main>
    </div>
  );
}
