'use client'

import { Product } from "@/src/interfaces/intefaces"

type Filter = {
        name : string,
        category : string
        orderName : string
        orderPrice : string
}

type SearchFormProps = {
    filter : Filter,
    setFilter : React.Dispatch<React.SetStateAction<Filter>>
    products : Product[],
    setProductsFiltered : React.Dispatch<React.SetStateAction<Product[]>>
}

export const SearchForm = ({filter, setFilter, products, setProductsFiltered} : SearchFormProps) => {

    let productsCategories = products ? [...new Set(products.map(product => product.category))] : []

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target
       
        setFilter(filter => ({
            ...filter,
            [name] : value
        }))
    }

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        let productsOrdered;
        const productsFiltered = products.filter(product => 
             product.title.toLocaleLowerCase().includes(filter.name.toLocaleLowerCase())
        &&   product.category == filter.category
        )

        if (filter.orderName == 'a') {
            productsOrdered = products.sort((a,b) => a.title.localeCompare(b.title))
            setProductsFiltered(productsOrdered)
        }else if (filter.orderName == 'z') {
            productsOrdered = products.sort((a,b) => b.title.localeCompare(a.title))
            setProductsFiltered(productsOrdered)
        }

        if (filter.orderPrice == 'lowest') {
            productsOrdered = products.sort((a,b) => a.price - b.price)
            setProductsFiltered(productsOrdered)
        }else if (filter.orderPrice == 'highest') {
            productsOrdered = products.sort((a,b) => b.price - a.price)
            setProductsFiltered(productsOrdered)
        }
        setProductsFiltered(productsFiltered)
    }
    
  return (
    <form onSubmit={handleSubmit} className="my-4">
        <div className="h-10 flex justify-between items-center border rounded px-2 py-2 ">
            <input type="text"
                    id="name"
                    name= "name"
                    className="outline-0"
                    placeholder="Search product"
                    onChange={handleChange}
                />
            <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24"><title>Baseline-search SVG Icon</title><path fill="#000000" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"/></svg>
        </div>
        <div className="w-full flex justify-around">
           
            <select id="category" 
                    name="category"
                    onChange={handleChange}
                    defaultValue=""
                    className="m-2">
                <option value="" disabled>Category</option>
                {
                    productsCategories.length > 0 ? productsCategories.map(category => (
                        <option key={category} value={category}>{category}</option>)) :
                        <option></option>
                }
            </select>
            <select id="orderName" 
                    name="orderName"
                    onChange={handleChange}
                    className="m-2"
                    defaultValue="">
                <option value="" disabled>Nombre</option>
                <option value="a">A - a</option>
                <option value="z">Z - z</option>
            </select>
            <select id="orderPrice" 
                    name="orderPrice"
                    onChange={handleChange}
                    className="m-2"
                    defaultValue="">
                <option value="" disabled>Price</option>
                <option value="lowest">Lowest price</option>
                <option value="highest">Highest price</option>
            </select>
        </div>
        <button className="bg-black rounded font-bold text-white px-4 py-2 m-2 flex" >
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><title>Baseline-search SVG Icon</title><path fill="white" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"/></svg>
            Search
        </button>
    </form>
  )
}

