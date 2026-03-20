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

     if(!products) return <div><Spinner/> Loading</div>
     
    const productsList = productsFiltered.length > 0 ? productsFiltered : products

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-100 font-sans text-black">
     
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center pb-2  bg-zinc-100 sm:items-start">
       <Hero/>
       <SearchForm filter={filter} setFilter={setFilter} products={products} setProductsFiltered={setProductsFiltered}/>
       <ProductsList products={productsList}/>
      </main>
    </div>
  );
}
