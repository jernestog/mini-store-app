import Image from "next/image";
import { Hero } from "./home/Hero";
import { ProductsList } from "./home/ProductsList";




export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-100 font-sans text-black">
     
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center pb-2  bg-zinc-100 sm:items-start">
       <Hero/>
       <ProductsList/>
      </main>
    </div>
  );
}
