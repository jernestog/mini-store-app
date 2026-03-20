"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { OrderList } from "./OrderList"
import Spinner from "@/src/components/Spinner"

export default function Orders() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState({role: "" })

  useEffect(() => {
      fetch('api/auth/me')
      .then(resp => resp.json())
      .then(data => {
        if (!data.user || data.user.role !== 'admin'){
          router.push('/')
        }else{
          setUser(data.user)
          setLoading(false)
        }
      })
  }, [])

  
  if(loading || user.role !== 'admin') return <div className="flex flex-col place-self-center"><Spinner/> Loading</div>

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <OrderList/>
    </section>
  )
}